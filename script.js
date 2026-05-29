const portfolioStyles = document.createElement("style");
portfolioStyles.textContent = `
  .hero-profile {
    align-self: stretch;
    display: grid;
    gap: 18px;
  }

  .profile-card {
    margin: 0;
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: var(--surface);
    box-shadow: var(--shadow);
  }

  .profile-card img {
    display: block;
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    object-position: center top;
  }

  .profile-card figcaption {
    padding: 16px;
    color: var(--muted);
    line-height: 1.5;
  }

  .profile-card figcaption span {
    display: block;
    margin-bottom: 4px;
    color: var(--text);
    font-weight: 800;
  }

  .hero-profile .hero-panel {
    min-height: 260px;
  }

  .certificate-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    margin-top: 18px;
  }

  .certificate-card {
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: var(--surface);
    box-shadow: var(--shadow);
  }

  .certificate-card img {
    display: block;
    width: 100%;
    aspect-ratio: 1.35;
    object-fit: contain;
    background: #fff;
    border-bottom: 1px solid var(--line);
  }

  .certificate-card div {
    padding: 18px;
  }

  .certificate-card p {
    margin: 0;
    color: var(--muted);
    line-height: 1.55;
  }

  @media (max-width: 980px) {
    .certificate-gallery {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 700px) {
    .certificate-gallery {
      grid-template-columns: 1fr;
    }
  }
`;
document.head.appendChild(portfolioStyles);

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
