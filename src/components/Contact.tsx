"use client";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    const { name, email, message } = formData;
    
    // Validation
    if (!name.value || !email.value || !message.value) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    setIsLoading(true);

    const templateParams = {
      from_name: name.value,
      from_email: email.value,
      message: message.value,
    };

    emailjs.send(
      'service_w4kk7dn',        // ← Remplace par ton SERVICE_ID
      'template_lqalmep',       // ← Remplace par ton TEMPLATE_ID
      templateParams,
      '6fKlj-Klb81EFVEkK'          // ← Remplace par ta PUBLIC_KEY
    ).then((response) => {
      alert('Message envoyé avec succès !');
      setFormData(defaultFormState);
      setIsLoading(false);
    }).catch((error) => {
      alert('Erreur lors de l\'envoi du message');
      console.error(error);
      setIsLoading(false);
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Votre Nom"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.name.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
        <input
          type="email"
          placeholder="Votre email"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.email.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <div>
        <textarea
          placeholder="Votre Message"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <button
        className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Envoi en cours..." : "Envoyer"}
      </button>
    </form>
  );
};
