"use client";

import React, { useState } from "react";
import {
  AlertTriangle,
  Users,
  MapPin,
  CheckCircle,
  TreePine,
  HeartHandshake,
  ArrowRight,
  Activity,
  X,
} from "lucide-react";

const dossierSlides = [
  { src: "/img/cover-dossier.png", title: "Dossier Sicurezza Monumento" },
  { src: "/img/dossier-obiettivo.png", title: "Obiettivo: data certa di intervento" },
  { src: "/img/dossier-matrice-rischi.png", title: "Matrice diagnostica dei rischi" },
  { src: "/img/dossier-cambio-paradigma.png", title: "Cambio di paradigma" },
  { src: "/img/dossier-collaborazione.png", title: "Collaborazione cittadina" },
  { src: "/img/dossier-prossimo-passo.png", title: "Il prossimo passo" },
  { src: "/img/cover-restoration.png", title: "Ripristino urgente" },
  { src: "/img/restoration-32-bambini.png", title: "32 bambini che aspettano" },
  { src: "/img/restoration-promessa-realta.png", title: "La promessa vs la realtà" },
  { src: "/img/restoration-audit.png", title: "Audit del sito: criticità" },
  { src: "/img/restoration-3-pilastri.png", title: "I 3 pilastri del ripristino" },
  { src: "/img/restoration-nuovo-modello.png", title: "Nuovo modello: la comunità è pronta" },
];

export default function Page() {
  // URL della Web App Apps Script (Distribuisci -> App web -> URL che finisce con /exec)
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxmRXvRgTWLn4OaNFqR5Cu2DNRT9UcH-8-cAiHkLO4JjAJasQGGF7dpX2gMpw2lYEUX/exec";

  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "submitted" | "error"
  >("idle");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const params = new URLSearchParams({
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      lavori: data.get("lavori") ? "true" : "false",
      eventi: data.get("eventi") ? "true" : "false",
    });

    setFormStatus("sending");
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      setFormStatus("submitted");
      form.reset();
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header / Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <TreePine className="h-6 w-6 text-emerald-600" />
              <span className="font-bold text-xl tracking-tight text-slate-900">
                Un Parco per Vellano
              </span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a
                href="#il-problema"
                className="text-slate-600 hover:text-emerald-600 font-medium transition-colors"
              >
                La Situazione
              </a>
              <a
                href="#il-progetto"
                className="text-slate-600 hover:text-emerald-600 font-medium transition-colors"
              >
                Il Progetto
              </a>
              <a
                href="#dossier"
                className="text-slate-600 hover:text-emerald-600 font-medium transition-colors"
              >
                Dossier
              </a>
              <a
                href="#partecipa"
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
              >
                Sostieni il progetto
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/img/hero-rendering.png"
            alt="Rendering del parco con altalena e scivolo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/70 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/30 text-emerald-100 text-sm font-semibold mb-4 border border-emerald-500/50">
              Iniziativa Cittadina · Vellano (Pescia)
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Restituiamo uno spazio sicuro ai 32 bambini di Vellano.
            </h1>
            <p className="text-xl md:text-2xl text-emerald-50 mb-8 leading-relaxed">
              Un progetto della comunità per riqualificare l&apos;area verde di
              Via della Piazza Giardino. Da spazio abbandonato a punto di
              aggregazione sicuro per le famiglie.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#partecipa"
                className="flex items-center justify-center bg-white text-emerald-900 px-6 py-3 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg"
              >
                Aderisci all&apos;iniziativa <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#il-progetto"
                className="flex items-center justify-center border-2 border-white/30 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
              >
                Scopri il progetto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dati Chiave */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-slate-50">
              <Users className="h-10 w-10 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-4xl font-black text-slate-900 mb-2">32</h3>
              <p className="text-slate-600 font-medium">
                Bambini residenti nel paese che necessitano di uno spazio
                idoneo.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50">
              <MapPin className="h-10 w-10 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-4xl font-black text-slate-900 mb-2">1</h3>
              <p className="text-slate-600 font-medium">
                Sola area pubblica disponibile: il parchetto di Via della
                Piazza Giardino.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-rose-50">
              <AlertTriangle className="h-10 w-10 text-rose-600 mx-auto mb-4" />
              <h3 className="text-4xl font-black text-slate-900 mb-2">0</h3>
              <p className="text-slate-600 font-medium">
                Strutture ludiche a norma e sicure attualmente presenti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Il Problema */}
      <section id="il-problema" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Lo stato attuale: un&apos;area inagibile e pericolosa
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-slate-600">
                  Nonostante l&apos;incremento demografico di giovani famiglie
                  a Vellano, l&apos;unica area destinata a parco giochi versa
                  in condizioni di totale degrado. L&apos;assenza di
                  manutenzione espone i nostri figli a rischi inaccettabili.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-rose-100 flex items-center justify-center mt-1">
                      <AlertTriangle className="h-4 w-4 text-rose-600" />
                    </div>
                    <p className="ml-3 text-slate-700">
                      <strong>Monumento pericolante:</strong> Colonne in pietra
                      sgretolate, divelte e abbandonate a terra. Rischio
                      critico di schiacciamento.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-rose-100 flex items-center justify-center mt-1">
                      <AlertTriangle className="h-4 w-4 text-rose-600" />
                    </div>
                    <p className="ml-3 text-slate-700">
                      <strong>Rischio biologico:</strong> Catene in ferro,
                      chiodi arrugginiti e ferri sporgenti facilmente
                      accessibili. Rischio di lacerazioni e tetano.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-rose-100 flex items-center justify-center mt-1">
                      <AlertTriangle className="h-4 w-4 text-rose-600" />
                    </div>
                    <p className="ml-3 text-slate-700">
                      <strong>Perimetro non protetto:</strong> Staccionate
                      divelte, gradinate sconnesse e dislivelli senza
                      protezione. Cadute da altezza.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => setLightbox("/img/problema-monumento.png")}
                className="block w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src="/img/problema-monumento.png"
                  alt="Reperto A — Rischio schiacciamento e infezione"
                  className="w-full h-auto"
                />
              </button>
              <button
                onClick={() => setLightbox("/img/problema-perimetro.png")}
                className="block w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src="/img/problema-perimetro.png"
                  alt="Reperto B — Cedimento confini e pericolo caduta"
                  className="w-full h-auto"
                />
              </button>
            </div>
          </div>

          <button
            onClick={() => setLightbox("/img/restoration-promessa-realta.png")}
            className="block w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <img
              src="/img/restoration-promessa-realta.png"
              alt="La promessa vs la realtà"
              className="w-full h-auto"
            />
          </button>
        </div>
      </section>

      {/* Il Progetto / La Soluzione */}
      <section id="il-progetto" className="py-20 bg-emerald-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Il Nostro Progetto Operativo
            </h2>
            <p className="text-xl text-emerald-100">
              Abbiamo presentato all&apos;Amministrazione Comunale un piano
              chiaro, a basso costo e realizzabile in tempi brevi, supportato
              dal volontariato cittadino.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-emerald-800/50 border border-emerald-700 p-8 rounded-2xl">
              <div className="bg-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Messa in Sicurezza</h3>
              <p className="text-emerald-100/80">
                Rimozione immediata dei pericoli: taglio dell&apos;erba
                infestante, eliminazione dei chiodi e ripristino delle
                staccionate protettive con reti a norma.
              </p>
            </div>

            <div className="bg-emerald-800/50 border border-emerald-700 p-8 rounded-2xl">
              <div className="bg-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                2. Spostamento Monumento
              </h3>
              <p className="text-emerald-100/80">
                Con l&apos;autorizzazione della Sovrintendenza, ricollocazione
                del monumento (attualmente un duplicato in rovina)
                nell&apos;area sottostante per liberare lo spazio centrale.
              </p>
            </div>

            <div className="bg-emerald-800/50 border border-emerald-700 p-8 rounded-2xl">
              <div className="bg-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <HeartHandshake className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                3. Installazione Giochi
              </h3>
              <p className="text-emerald-100/80">
                Donazione e posa in opera (su pavimentazione antitrauma o
                pacciamatura omologata) di un&apos;altalena, uno scivolo e
                tavoli da picnic.
              </p>
            </div>

            <div className="bg-emerald-800/50 border border-emerald-700 p-8 rounded-2xl">
              <div className="bg-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">4. Patto di Gestione</h3>
              <p className="text-emerald-100/80">
                Assunzione diretta della manutenzione ordinaria (es. taglio
                erba) tramite il bando &quot;Adotta un&apos;area verde&quot;
                da parte delle associazioni locali.
              </p>
            </div>
          </div>

          <button
            onClick={() => setLightbox("/img/restoration-3-pilastri.png")}
            className="block w-full rounded-2xl overflow-hidden shadow-2xl hover:shadow-emerald-500/20 transition-shadow border border-emerald-700"
          >
            <img
              src="/img/restoration-3-pilastri.png"
              alt="I 3 pilastri del ripristino urgente"
              className="w-full h-auto"
            />
          </button>
        </div>
      </section>

      {/* Dossier completo */}
      <section id="dossier" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-4">
              Documento Ufficiale
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Il dossier presentato all&apos;Amministrazione
            </h2>
            <p className="text-lg text-slate-600">
              La documentazione completa che il Comitato Cittadino ha
              consegnato al Comune di Pescia, ai gruppi consiliari, al
              Circolo, alla Pro Loco e all&apos;Associazione Parrocchiale.
              Clicca su ogni scheda per ingrandire.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dossierSlides.map((slide) => (
              <button
                key={slide.src}
                onClick={() => setLightbox(slide.src)}
                className="text-left bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all"
              >
                <div className="aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-slate-800 text-sm">
                    {slide.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Form */}
      <section id="partecipa" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Unisciti al Comitato Cittadino
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Per presentare formalmente il progetto al Comune di Pescia
              abbiamo bisogno del supporto di tutti. Lascia i tuoi dati per
              firmare la richiesta o dare la tua disponibilità come
              volontario.
            </p>

            {formStatus === "submitted" ? (
              <div className="bg-emerald-100 border border-emerald-200 text-emerald-800 rounded-xl p-6 flex flex-col items-center">
                <CheckCircle className="h-12 w-12 text-emerald-600 mb-3" />
                <h4 className="text-xl font-bold">
                  Grazie per il tuo supporto!
                </h4>
                <p className="mt-2">
                  La tua adesione è stata registrata. Ti terremo aggiornato
                  sui prossimi passi.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 text-left max-w-lg mx-auto"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Nome e Cognome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="Es. Mario Rossi"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="mario.rossi@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Come vuoi contribuire?
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="lavori"
                        className="w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="text-slate-700">
                        Disponibilità per manutenzione e lavori volontari
                      </span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="eventi"
                        className="w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="text-slate-700">
                        Contributo per cene ed eventi di raccolta fondi
                      </span>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full mt-6 bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-emerald-700 transition-colors shadow-lg disabled:opacity-60"
                >
                  {formStatus === "sending" ? "Invio in corso…" : "Aderisci all'iniziativa"}
                </button>
                {formStatus === "error" && (
                  <p className="text-sm text-red-600 text-center">
                    Si è verificato un errore. Riprova o scrivici direttamente.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <TreePine className="h-8 w-8 text-emerald-500" />
            <span className="font-bold text-2xl text-white">Vellano</span>
          </div>
          <p className="mb-4">
            Iniziativa promossa dai cittadini di Vellano in collaborazione con
            le Associazioni Locali (Circolo, Pro Loco, Ass. Parrocchiale).
          </p>
          <p className="text-sm">
            Obiettivo: Riqualificazione urbana e restituzione spazi sociali.
            Pescia, Toscana.
          </p>
        </div>
      </footer>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-emerald-400 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Chiudi"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={lightbox}
            alt="Anteprima"
            className="max-w-full max-h-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
