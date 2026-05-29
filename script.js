const heroPanel = document.querySelector(".hero-panel");

if (heroPanel) {
  const profileWrapper = document.createElement("aside");
  profileWrapper.className = "hero-profile";
  profileWrapper.setAttribute("aria-label", "Profile photo and recruitment focus summary");
  profileWrapper.innerHTML = `
    <figure class="profile-card">
      <img src="assets/profile-odoo.svg" alt="Tiara Saputri at Odoo Days Indonesia 2026" />
      <figcaption>
        <span>Odoo Days Indonesia 2026</span>
        HRIS learning, people operations, and continuous HR development.
      </figcaption>
    </figure>
  `;
  heroPanel.replaceWith(profileWrapper);
  profileWrapper.appendChild(heroPanel);
}

const proofGrid = document.querySelector(".proof-grid");

if (proofGrid && !document.querySelector(".certificate-gallery")) {
  const certificateGallery = document.createElement("div");
  certificateGallery.className = "certificate-gallery";
  certificateGallery.setAttribute("aria-label", "Certificate gallery");
  certificateGallery.innerHTML = `
    <article class="certificate-card">
      <img src="assets/certificate-digital-marketing.svg" alt="Certificate of Training in Digital Marketing from GAOTek Inc." />
      <div>
        <h3>Digital Marketing Training</h3>
        <p>GAOTek Inc. training certificate for a four-month internship program, issued July 3, 2025.</p>
      </div>
    </article>
    <article class="certificate-card">
      <img src="assets/certificate-gaotek-internship.svg" alt="Certificate of Completion from GAOTek Inc." />
      <div>
        <h3>GAOTek Internship Completion</h3>
        <p>Four-month internship completion certificate from GAOTek Inc., issued July 3, 2025.</p>
      </div>
    </article>
    <article class="certificate-card">
      <img src="assets/certificate-ca.svg" alt="Certificate Internship Batch 1 from belajarsosmed.com" />
      <div>
        <h3>Internship Batch 1</h3>
        <p>Belajarsosmed.com internship program recognition for March to June 2025.</p>
      </div>
    </article>
  `;
  proofGrid.insertAdjacentElement("afterend", certificateGallery);
}

const topButton = document.querySelector(".top-button");

topButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
