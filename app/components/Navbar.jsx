"use client";

import Link from "next/link";
import { navlink_1, navLink_2 } from "../constants/navbarLink";
import { MdOutlineContactSupport, MdOutlineSearch } from "react-icons/md";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { RiContactsLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { GrContact } from "react-icons/gr";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white  z-50">
      <div className="max-w-7xl mx-auto flex justify-end md:justify-between items-center px-6 py-3">
        <div className="flex justify-end  md:items-center gap-2">
          {/* <svg
            className="ign-logo w-40 h-auto"
            viewBox="0 0 170 38"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Large---1280px-(Max-Width)"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="IGN---Transparent"
                transform="translate(-104.000000, -21.000000)"
              >
                <g id="IGN">
                  <g id="Logo" transform="translate(104.000000, 21.000000)">
                    <g
                      id="Text"
                      transform="translate(51.502463, 9.973333)"
                      fill="#FFFFFF"
                    >
                      <polyline
                        className="ign-logo__fill"
                        id="Fill-4"
                        points="0.225647399 17.0377015 0.225647399 0.584446483 4.63718082 0.584446483 10.2269671 12.8797823 15.7337777 0.584446483 19.9599991 0.584446483 19.9599991 17.0377015 16.3222127 17.0377015 16.3222127 7.46604648 12.1250328 17.0377015 8.24730872 17.0377015 3.99619469 7.51820061 3.99619469 17.0377015 0.225647399 17.0377015"
                      ></polyline>
                      <path
                        className="ign-logo__fill"
                        d="M34.599652,10.6673492 L31.5558322,3.69310703 L28.5818502,10.6673492 L34.599652,10.6673492 Z M25.8609436,17.0377015 L21.5828626,17.0377015 L28.9365707,0.584446483 L34.2034438,0.584446483 L41.6097031,17.0377015 L37.386939,17.0377015 L35.9293352,13.7602263 L27.2736024,13.7602263 L25.8609436,17.0377015 L25.8609436,17.0377015 Z"
                        id="Fill-5"
                      ></path>
                      <polyline
                        className="ign-logo__fill"
                        id="Fill-6"
                        points="43.3155421 17.0377015 43.3155421 0.584446483 59.1445112 0.584446483 59.1445112 3.87427401 47.1386406 3.87427401 47.1386406 7.1421419 57.432449 7.1421419 57.432449 10.353052 47.1386406 10.353052 47.1386406 13.7465015 59.1735527 13.7465015 59.1735527 17.0377015 43.3155421 17.0377015"
                      ></polyline>
                      <path
                        className="ign-logo__fill"
                        d="M66.1296696,8.13924648 L74.4465856,8.13924648 L74.4465856,3.87427401 L66.1296696,3.87427401 L66.1296696,8.13924648 Z M62.252637,17.0377015 L62.252637,0.584446483 L75.4983007,0.584446483 C77.2677543,0.584446483 78.2952682,1.60076575 78.2952682,3.34381162 L78.2952682,8.871463 C78.2952682,10.143063 77.1605776,11.2925125 74.961034,11.2925125 C74.8365707,11.2986887 74.7093415,11.2925125 74.578655,11.2925125 L78.4342523,17.0377015 L74.1789895,17.0377015 L70.523225,11.411918 L66.1296696,11.411918 L66.1296696,17.0377015 L62.252637,17.0377015 L62.252637,17.0377015 Z"
                        id="Fill-7"
                      ></path>
                      <path
                        className="ign-logo__fill"
                        d="M85.2700547,17.0473089 L83.9576581,17.0473089 C82.244213,17.0473089 81.4192977,16.0646153 81.4192977,14.633808 L81.4192977,12.4845089 L85.2700547,12.4845089 L85.2700547,13.7574813 L93.4521354,13.7574813 L93.4521354,10.3894226 C93.4521354,10.3894226 85.5646179,10.3894226 84.0669092,10.3894226 C82.5685091,10.3894226 81.4891354,9.38957309 81.4891354,8.00199878 L81.4891354,3.11735291 C81.4891354,1.63919511 82.6639309,0.594740061 84.0931848,0.594740061 C85.5217472,0.594740061 94.8219234,0.594740061 94.8219234,0.594740061 C96.2719212,0.594740061 97.2752339,1.66870336 97.2752339,3.22166116 C97.2752339,4.77256024 97.2752339,5.1849896 97.2752339,5.1849896 L93.4521354,5.1849896 L93.4521354,3.88456758 L85.2700547,3.88456758 L85.2700547,7.12498593 L94.6283138,7.12498593 C96.0098567,7.12498593 97.2752339,8.03219327 97.2752339,9.77867034 L97.2752339,14.4746006 C97.2752339,16.0742226 96.3811723,17.0473089 94.709215,17.0473089 C93.0372576,17.0473089 85.2700547,17.0473089 85.2700547,17.0473089"
                        id="Fill-8"
                      ></path>
                      <polyline
                        className="ign-logo__fill"
                        id="Fill-9"
                        points="100.970412 17.0473089 100.970412 0.592681346 104.900687 0.592681346 104.900687 7.17370887 112.387156 0.592681346 117.708655 0.592681346 108.77772 8.23600612 118.030185 17.0473089 112.520608 17.0473089 104.900687 9.56319144 104.900687 17.0473089 100.970412 17.0473089"
                      ></polyline>
                    </g>
                    <g id="Star" fill-rule="nonzero">
                      <path
                        d="M4.28463565,0 L31.3468062,0 C33.7169495,0 35.6383302,1.91076181 35.6383302,4.26780595 L35.6383302,33.132194 C35.6383302,35.4892382 33.7169495,37.4 31.3468062,37.4 L4.28463565,37.4 C1.91830905,37.4 0,35.4923151 0,33.1390665 L0,4.27467843 C-0.00365105909,3.142229 0.446140088,2.05490945 1.25005944,1.25285417 C2.0539788,0.450798892 3.14588678,0 4.28463565,0 Z"
                        id="Shape"
                        fill="#42B0D5"
                      ></path>
                      <polygon
                        id="Shape"
                        fill="#FFFFFF"
                        points="23.4962889 17.6509756 30.5313476 8.91442683 30.5106156 8.88706098 20.3450249 13.7308171 17.8364529 2.84604878 17.7949889 2.84604878 15.2864169 13.7308171 5.12082631 8.88706098 5.10009431 8.91442683 12.135153 17.6509756 1.96956232 22.4947317 1.98338365 22.528939 13.2615916 22.528939 10.7530196 33.4205488 10.7806623 33.4342317 17.8157209 24.6976829 24.8507796 33.4342317 24.8853329 33.4137073 22.3698503 22.528939 33.6549689 22.528939 33.6618796 22.4947317"
                      ></polygon>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg> */}
          {/* <span className="font-bold text-lg hidden md:block">MAERSK</span> */}

          {/* Mobile Menu */}

          <Link href="/" className="text-xl">
            Home
          </Link>

          <div className="flex  md:hidden ml-20 items-center gap-4">
            <MdOutlineSearch size={25} className="text-gray-700" />
            <MdOutlineContactSupport size={23} className="text-gray-700" />
            <GrContact size={20} className="text-gray-700" />
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <RxCross2 size={25} />
              ) : (
                <HiMiniBars3BottomRight size={25} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile open navbar */}

        <AnimatePresence>
          {open && (
            <>
              {/* Background Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black z-40"
                onClick={() => setOpen(false)}
              />

              {/* Sliding Menu */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.4 }}
                className="fixed top-0 right-0 h-full w-full bg-white shadow-lg z-50"
              >
                <div className="flex justify-end p-4">
                  <button onClick={() => setOpen(false)}>
                    <RxCross2 size={25} className="text-gray-700" />
                  </button>
                </div>

                <ul className="flex flex-col gap-4 font-medium text-gray-700 px-6">
                  <li>
                    <Link href="#">Prices</Link>
                  </li>
                  <li>
                    <Link href="#">Book</Link>
                  </li>
                  <li>
                    <Link href="#">Schedules</Link>
                  </li>
                  <li>
                    <Link href="#">Tracking</Link>
                  </li>
                  <li>
                    <Link href="#">Manage</Link>
                  </li>
                  <li>
                    <Link href="#">Services</Link>
                  </li>
                  <li>
                    <Link href="#">Company</Link>
                  </li>
                </ul>

                <div className="mt-6 px-6 flex gap-3">
                  <button className="w-1/2 px-4 py-2 border rounded">
                    Register
                  </button>
                  <button className="w-1/2 px-4 py-2 bg-sky-500 text-white rounded">
                    Login
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Desktop navlink_1 */}

        <div className="hidden md:block">
          <ul className="flex gap-5">
            {navlink_1.map((l, index) => (
              <div key={index}>
                <Link
                  href={l.path}
                  className="flex items-center p-2 hover:bg-gray-200 transition-all duration-300 gap-1 rounded text-[16px]"
                >
                  {l.icon}
                  <li>{l.title}</li>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop_Navlink_2 */}

      <div className="px-6 hidden md:flex md:justify-between md:items-center py-2">
        <ul className="flex gap-5">
          {navLink_2.map((l, index) => (
            <div key={index}>
              <Link
                href="#"
                className="flex p-2 hover:bg-gray-200 transition-all duration-300 items-center rounded"
              >
                {l.title}
                <li>{l.icon}</li>
              </Link>
            </div>
          ))}
        </ul>
        <div className="flex gap-2">
          <Link
            href="#"
            className="flex items-center gap-2 border p-2 rounded hover:bg-gray-200 transition-all duration-300 border-gray-200"
          >
            <RiContactsLine />
            <span>Register</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 border p-2 rounded hover:bg-gray-200 transition-all duration-300 border-gray-200"
          >
            <RiContactsLine />
            <span>Login</span>
          </Link>
        </div>
      </div>

      <div className="border-b border-gray-200"></div>
    </nav>
  );
};

export default Navbar;
