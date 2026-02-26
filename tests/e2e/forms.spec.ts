import { expect, test } from "@playwright/test";

test("contact form happy path", async ({ page }) => {
  await page.goto("/contact");
  await page.getByLabel("Nom complet").fill("Utilisateur Test");
  await page.getByLabel("Email").fill("user@test.com");
  await page.getByLabel("Message").fill("Message de test pour validation formulaire.");
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: "Envoyer" }).click();
  await expect(page.getByText("Message envoyé avec succès.")).toBeVisible();
});

test("quote form happy path", async ({ page }) => {
  await page.goto("/request-quote");
  await page.getByLabel("Nom complet").fill("Client QA");
  await page.getByLabel("Email").fill("clientqa@test.com");
  await page.getByLabel("Téléphone").fill("+22245123456");
  await page
    .getByLabel("Détails du projet")
    .fill("Projet de centrale solaire pour un site industriel avec stockage.");
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: "Soumettre" }).click();
  await expect(page.getByText("Votre demande de devis a été transmise.")).toBeVisible();
});
