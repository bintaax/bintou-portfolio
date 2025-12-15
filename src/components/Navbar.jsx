import { Menu, Github, Linkedin, ArrowUpRight } from "lucide-react"

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-base-100/70 border-b border-base-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="navbar px-0">

          {/* LOGO */}
          <div className="flex-1">
            <a
              href="#"
              className="text-xl font-bold"
            >
              Bintou Sylla

            </a>
          </div>

          {/* MENU */}
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle hover:bg-base-200 transition"
              aria-label="Menu"
            >
              <Menu size={22} />
            </label>

            <ul
              tabIndex={0}
              className="menu dropdown-content mt-4 p-4 shadow-xl bg-base-200 rounded-xl w-60 space-y-1"
            >
              {/* NAVIGATION */}
              <li>
                <a
                  href="#projects"
                  className="flex justify-between items-center"
                >
                  Projets
                  <ArrowUpRight size={16} />
                </a>
              </li>

                <li>
                <a
                  href="#cv"
                  className="flex justify-between items-center"
                >
                  CV
                  <ArrowUpRight size={16} />
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="flex justify-between items-center"
                >
                  Contact
                  <ArrowUpRight size={16} />
                </a>
              </li>

              <div className="divider my-2" />

              {/* SOCIALS */}
              <li>
                <a
                  href="https://github.com/bintaax"
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-2"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/bsyllacsk/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-2"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Navbar
