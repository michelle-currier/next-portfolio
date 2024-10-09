"use client";

import React, { useState } from "react";
import { Button, Flex, Heading, Text } from "@/once-ui/components";
import styles from "@/app/contact/contact.module.scss";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send email. Please try again later.");
      }
    } catch (error) {
      setStatus("Failed to send email. Please try again later.");
      console.error("Error:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Flex direction="column" padding="m">
      <Heading variant="display-strong-m" className="mb-24">
        Contact Us
      </Heading>
      <form onSubmit={handleSubmit}>
        <Flex
          direction="column"
          gap="m"
          padding="m"
          className="surface-background neutral-border-medium border-solid-1 radius-m-4"
        >
          <input
            className={styles.special}
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className={styles.special}
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className={styles.special}
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            className={styles.special}
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" className={styles.butt}>
            Send Message
          </Button>
        </Flex>
      </form>

      {status && (
        <Flex direction="column" gap="m" className="mt-16">
          <Flex
            padding="s"
            radius="m"
            className={`font-m ${
              status.includes("successfully")
                ? "success-solid-weak"
                : "danger-solid-weak"
            }`}
          >
            {status}
          </Flex>
        </Flex>
      )}

      <Flex direction="column" gap="m" padding="s">
        <p>Or, send us an email directly at</p>
        <a href="mailto:mcurrierdesigns@gmail.com" className="text-blue-600">
          mcurrierdesigns@gmail.com
        </a>
      </Flex>
    </Flex>
  );
}
