import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import Modal from './Modal';
import Slide from './Slide';

function Portfolio({ portfolio }) {
  const [reactAdmin, setReactAdmin] = useState(false);
  const [bukuId, setBukuId] = useState(false);
  const [incovid, setIncovid] = useState(false);
  const [tokoIkan, setTokoIkan] = useState(false);
  const [chatApp, setChatApp] = useState(false);
  const [eduskill, setEduskill] = useState(false);
  return (
    <div>
      <div className="px-4 lg:px-2" ref={portfolio}>
        <div className="mx-auto md:px-0 max-w-6xl rounded-r-[6rem] md:rounded-r-[9rem] lg:rounded-r-[11rem] bg-gradient-to-r from-transparent to-stone-800 h-fit">
          <div className="flex flex-col h-fit py-4 md:py-10">
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold underline decoration-2 underline-offset-8 text-center">Code</p>
            <Slide
              setReactAdmin={() => setReactAdmin(true)}
              setBukuId={() => setBukuId(true)}
              setIncovid={() => setIncovid(true)}
              setTokoIkan={() => setTokoIkan(true)}
              setChatApp={() => setChatApp(true)}
              setEduskill={() => setEduskill(true)}
            />
          </div>
        </div>
      </div>
      {/* Template Admin Reactjs */}
      <Modal title="Template Admin React Js" isOpen={reactAdmin} closeModal={() => setReactAdmin(false)}>
        <div className="w-1/2">
          <StaticImage
            src="../images/aula-admin.png"
            alt=""
            className="rounded-[1.5rem] md:rounded-2xl lg:rounded-3xl drop-shadow shadow h-auto w-full"
          />
        </div>
        <div className="flex flex-col gap-4 w-1/2">
          <p className="text-lg md:text-xl font-semibold text-gray-700">
            Template admin React js
          </p>
          <div className="flex flex-col gap-2">
            <div className="text-gray-600">
              Teknologi yang digunakan :
              <p className="font-semibold">
                React Js, Tailwind Css
              </p>
            </div>
            <a href="https://aula-admin.vercel.app/" target="_blank" rel="noreferrer">
              <p className="text-sky-500">https://aula-admin.vercel.app/</p>
            </a>
            <div className="flex gap-2">
              <div className="bg-sky-500 p-1 text-white text-xs w-fit">
                Frontend
              </div>
              <a
                href="https://github.com/nuruljaelani/aula-admin"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center bg-black w-fit p-1 gap-2">
                  <AiFillGithub className="text-white" />
                  <p className="text-xs text-white">Github</p>
                </div>
              </a>
            </div>

          </div>
        </div>
      </Modal>

      {/* Informasi Covid19 */}
      <Modal title="Portal Informasi Covid19" isOpen={incovid} closeModal={() => setIncovid(false)}>
        <div className="w-1/2">
          <StaticImage
            src="../images/Incovid.png"
            alt=""
            className="rounded-[1.5rem] md:rounded-2xl lg:rounded-3xl drop-shadow shadow h-auto w-full"
          />
        </div>
        <div className="flex flex-col gap-4 w-1/2">
          <p className="text-lg md:text-xl font-semibold text-gray-700">
            Portal Informasi Covid 19
          </p>
          <div className="flex flex-col gap-2">
            <div className="text-gray-600">
              Teknologi yang digunakan :
              <p className="font-semibold">
                Nuxt Js, Tailwind Css
              </p>
            </div>
            <p className="text-gray-600 font-medium">
              API : &nbsp;
              <a href="https://data.covid19.go.id/public/api/" target="_blank" className="text-sky-600 text-sm" rel="noreferrer">
                https://data.covid19.go.id/public/api/
              </a>
            </p>
            <a href="https://incovid19.vercel.app/" target="_blank" rel="noreferrer">
              <p className="text-sky-500">https://incovid19.vercel.app/</p>
            </a>
            <div className="flex space-x-2 items-center">
              <div className="bg-sky-500 p-1 text-white text-xs w-fit">
                Frontend
              </div>
              <a
                href="https://github.com/nuruljaelani/incovid"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center bg-black space-x-1 p-1">
                  <AiFillGithub className="text-white" />
                  <p className="text-xs text-white">Github</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Modal>

      {/* Toko Buku Online */}
      <Modal title="Toko Buku Online" isOpen={bukuId} closeModal={() => setBukuId(false)}>
        <div className="w-1/2">
          <StaticImage
            src="../images/bukuid.png"
            alt=""
            className="rounded-[1.5rem] md:rounded-2xl lg:rounded-3xl drop-shadow shadow h-auto w-full"
          />
        </div>
        <div className="flex flex-col gap-4 w-1/2">
          <p className="text-lg md:text-xl font-semibold text-gray-700">
            Toko Buku Online
          </p>
          <div className="flex flex-col gap-2">
            <div className="text-gray-600">
              Teknologi yang digunakan :
              <p className="font-semibold">
                Next Js, Redux, Redux Toolkit, Tailwind Css, Express Js, PostgreSql
              </p>
            </div>
            <a href="https://buku-id.vercel.app/" target="_blank" rel="noreferrer">
              <p className="text-sky-500">https://buku-id.vercel.app/</p>
            </a>
            <div className="bg-sky-500 p-1 text-white text-xs w-fit">
              Fullstack
            </div>
          </div>
        </div>
      </Modal>

      {/* Landing Page Toko Ikan */}
      <Modal title="Toko Ikan" isOpen={tokoIkan} closeModal={() => setTokoIkan(false)}>
        <div className="w-1/2">
          <StaticImage
            src="../images/toko-ikan.png"
            alt=""
            className="rounded-[1.5rem] md:rounded-2xl lg:rounded-3xl drop-shadow shadow h-auto w-full"
          />
        </div>
        <div className="flex flex-col gap-4 w-1/2">
          <p className="text-lg md:text-xl font-semibold text-gray-700">
            Landing Page Toko Ikan
          </p>
          <div className="flex flex-col gap-2">
            <div className="text-gray-600">
              Teknologi yang digunakan :
              <p className="font-semibold">
                Next Js, Tailwind Css, Slick Carousel
              </p>
            </div>
            <a href="https://toko-ikan.vercel.app" target="_blank" rel="noreferrer">
              <p className="text-sky-500">https://toko-ikan.vercel.app</p>
            </a>
            <div className="flex space-x-2 items-center">
              <div className="bg-sky-500 p-1 text-white text-xs w-fit">
                Frontend
              </div>
              <a
                href="https://github.com/nuruljaelani/slicing-figma"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center space-x-1 bg-black p-1">
                  <AiFillGithub className="text-white" />
                  <p className="text-xs text-white">Github</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Modal>

      {/* Realtime Chat App */}
      <Modal title="Realtime Chat App" isOpen={chatApp} closeModal={() => setChatApp(false)}>
        <div className="w-1/2">
          <StaticImage
            src="../images/chat-app.png"
            alt=""
            className="rounded-[1.5rem] md:rounded-2xl lg:rounded-3xl drop-shadow shadow h-auto w-full"
          />
        </div>
        <div className="flex flex-col gap-4 w-1/2">
          <p className="text-lg md:text-xl font-semibold text-gray-700">
            Realtime Chat App
          </p>
          <div className="flex flex-col gap-2">
            <div className="text-gray-600">
              Teknologi yang digunakan :
              <p className="font-semibold">
                Laravel, Tailwind Css, Laravel Websocket, PostgreSql
              </p>
            </div>
            <div className="flex space-x-2 items-center">
              <div className="bg-sky-500 p-1 text-white text-xs w-fit">
                Fullstack
              </div>
              <a
                href="https://github.com/nuruljaelani/chat-app"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center space-x-1 bg-black p-1">
                  <AiFillGithub className="text-white" />
                  <p className="text-xs text-white">Github</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Modal>

      {/* Landing Page Onlie Courses */}
      <Modal title="Landing Page Online Course" isOpen={eduskill} closeModal={() => setEduskill(false)}>
        <div className="w-1/2">
          <StaticImage
            src="../images/eduskills.png"
            alt=""
            className="rounded-[1.5rem] md:rounded-2xl lg:rounded-3xl drop-shadow shadow h-auto w-full"
          />
        </div>
        <div className="flex flex-col gap-4 w-1/2">
          <p className="text-lg md:text-xl font-semibold text-gray-700">
            Landing Page Online Course
          </p>
          <div className="flex flex-col gap-2">
            <div className="text-gray-600">
              Teknologi yang digunakan :
              <p className="font-semibold">
                Next Js, Tailwind Css
              </p>
            </div>
            <a href="https://eduskilss.vercel.app" target="_blank" rel="noreferrer">
              <p className="text-sky-500">https://eduskilss.vercel.app</p>
            </a>
            <div className="flex space-x-2 items-center">
              <div className="bg-sky-500 p-1 text-white text-xs w-fit">
                Frontend
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Portfolio;
