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
} from "lucide-react";

export default function Page() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitted");
    setTimeout(() => setFormStatus("idle"), 3000);
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
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/30 text-emerald-100 text-sm font-semibold mb-4 border border-emerald-500/50">
              Iniziativa Cittadina
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
                Firma la petizione <ArrowRight className="ml-2 h-5 w-5" />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                      <strong>Monumento pericolante:</strong> La struttura
                      centrale in pietra è sgretolata. Colonne e perni in
                      ferro rischiano di crollare al minimo urto.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-rose-100 flex items-center justify-center mt-1">
                      <AlertTriangle className="h-4 w-4 text-rose-600" />
                    </div>
                    <p className="ml-3 text-slate-700">
                      <strong>Assenza di recinzioni sicure:</strong> Le
                      staccionate in legno sono marce, divelte o mancanti, non
                      garantendo il contenimento verso i dislivelli.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-rose-100 flex items-center justify-center mt-1">
                      <AlertTriangle className="h-4 w-4 text-rose-600" />
                    </div>
                    <p className="ml-3 text-slate-700">
                      <strong>Ostacoli e ferri sporgenti:</strong> Gradoni
                      sconnessi, erba alta e vecchi ancoraggi arrugginiti
                      rendono l&apos;area impraticabile.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Galleria fotografica */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-slate-200 rounded-2xl h-48 w-full flex items-center justify-center overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1518423403565-d7168db74088?auto=format&fit=crop&q=80&w=800"
                    alt="Monumento pericolante"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-slate-200 rounded-2xl h-64 w-full flex items-center justify-center overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1584282424071-700d3d526da3?auto=format&fit=crop&q=80&w=800"
                    alt="Staccionata rotta"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-slate-200 rounded-2xl h-64 w-full flex items-center justify-center overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1598286985011-cb9eeb13bc75?auto=format&fit=crop&q=80&w=800"
                    alt="Erba alta e degrado"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-slate-200 rounded-2xl h-48 w-full flex items-center justify-center overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1533727503957-75e119430c6a?auto=format&fit=crop&q=80&w=800"
                    alt="Ferri sporgenti"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                del monumento (attualmente un duplicato in rovina) nell&apos;area
                sottostante per liberare lo spazio centrale.
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
        </div>
      </section>

      {/* Call to Action Form */}
      <section id="partecipa" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm text-center">
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
                        className="w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="text-slate-700">
                        Voglio solo firmare la petizione al Comune
                      </span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="text-slate-700">
                        Disponibilità per manutenzione e lavori volontari
                      </span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
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
                  className="w-full mt-6 bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-emerald-700 transition-colors shadow-lg"
                >
                  Invia Adesione
                </button>
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
    </div>
  );
}
