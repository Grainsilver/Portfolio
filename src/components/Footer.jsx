import {
  FaLinkedin,
  FaTiktok,
  FaFacebook,
  FaTwitter,
  FaBriefcase,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-8 py-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-[#E9E9EF] font-semibold">
              Flabby Tech Adventure
            </h2>
          </div>
          {/* Contact CTA */}
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="mailto:your@email.com"
              className="text-[var(--primary)] font-medium hover:opacity-80 transition"
            >
              Contact 
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-10 flex gap-6 text-2xl">

          <a href="https://www.linkedin.com/in/lilian-agbonkpolor-595aa0394?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#0A66C2" }}
    className="hover:scale-110 transition">
            <FaLinkedin />
          </a>

          <a href="https://www.tiktok.com/@lilian_trust1" target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#010101" }}
    className="hover:scale-110 transition">
            <FaTiktok />
          </a>

          <a href="https://www.facebook.com/share/1Cn47Pzvma/?mibextid=wwXIfr" target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#1877F2" }}
    className="hover:scale-110 transition">
            <FaFacebook />
          </a>

          <a href="https://www.upwork.com/freelancers/~0174b260116c7bf734?mp_source=share" target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#1877F2" }}
    className="hover:scale-110 transition">
            <FaBriefcase />
          </a>

          <a href="https://x.com/LilianEsohe" target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#1DA1F2" }}
    className="hover:scale-110 transition">
            <FaTwitter />
          </a>

        </div>
<p className="text-xs text-gray-500 mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
      </div>
    </footer>
  );
}
