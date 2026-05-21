import React from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  FileText,
  Globe2,
  Leaf,
  Search,
  Sparkles,
  Users,
} from 'lucide-react'
import './index.css'

const GPT_LINK = 'https://chatgpt.com/g/g-6a0eb69159808191a4cae529fb3a9f94-projectdata-estonia'

function Button({ children, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2'
  const variants = {
    primary: 'bg-emerald-900 text-white hover:bg-emerald-800',
    secondary: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50',
    light: 'bg-white text-emerald-950 hover:bg-emerald-50',
  }
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

function Card({ children, className = '' }) {
  return <div className={`rounded-3xl bg-white shadow-sm ${className}`}>{children}</div>
}

function App() {
  const openAssistant = () => {
    window.open(GPT_LINK, '_blank', 'noopener,noreferrer')
  }

  const personas = [
    'Sustainability Manager',
    'Policy Analyst',
    'Data / Insights Lead',
    'PR / Communications Lead',
    'NGO / Project Writer',
    'Educator / Citizen',
  ]

  const sources = [
    'Statistics Estonia',
    'avaandmed.eesti.ee',
    'Keskkonnaportaal',
    'Maa-amet',
    'Haridussilm',
    'Tervise Arengu Instituut',
    'EU Funding Portal',
    'Erasmus+ / Horizon / Interreg',
  ]

  const features = [
    {
      icon: <Search className="h-5 w-5" />,
      title: 'Find relevant data',
      text: 'Searches trusted Estonian and European public sources for useful datasets, indicators and evidence.',
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: 'Clean messy datasets',
      text: 'Helps standardize open data, identify gaps, and turn raw information into usable insights.',
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: 'Support project writing',
      text: 'Finds funding opportunities, official links, needs analysis evidence and measurable indicators.',
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: 'Explain clearly',
      text: 'Transforms complex sustainability and policy data into human-friendly summaries and recommendations.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#f7faf6] text-slate-900">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-900 text-white">
            <Leaf className="h-5 w-5" />
          </div>
          <div>
            <span className="block text-xl font-semibold tracking-tight">ProjectData Estonia</span>
            <span className="block text-xs text-slate-500">Ökoskoop / Datascope</span>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          <a href="#features" className="hover:text-slate-950">Features</a>
          <a href="#personas" className="hover:text-slate-950">Personas</a>
          <a href="#funding" className="hover:text-slate-950">Funding</a>
        </nav>

        <Button onClick={openAssistant}>Try the AI</Button>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-14 md:grid-cols-2 md:pt-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm text-emerald-900 shadow-sm">
              <Globe2 className="h-4 w-4" />
              AI-powered public data intelligence
            </div>

            <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
              Turn complex data into clear project insight.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              ProjectData Estonia helps NGOs, municipalities, consultants and sustainability teams find, understand and use Estonian and European public data — without needing technical expertise.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={openAssistant} className="px-7 py-4 text-base">
                Try the assistant <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="#features">
                <Button variant="secondary" className="px-7 py-4 text-base">View demo concept</Button>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-emerald-700" /> Estonia + EU</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-emerald-700" /> Funding calls</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-emerald-700" /> Open data</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-emerald-200 blur-3xl" />
            <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-lime-200 blur-3xl" />

            <Card className="relative overflow-hidden rounded-[2rem] border-0 bg-white/90 shadow-2xl backdrop-blur">
              <div className="p-6">
                <div className="rounded-3xl bg-slate-950 p-5 text-white">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm text-slate-300">Project match</span>
                    <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs text-emerald-200">Live research</span>
                  </div>
                  <h3 className="text-2xl font-semibold">Youth climate education project</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Potential fit: Erasmus+, Interreg, LIFE Programme and Estonia-focused environmental grants.
                  </p>
                </div>

                <div className="mt-5 grid gap-3">
                  {['Official funding links', 'Regional need evidence', 'Suggested impact indicators', 'Application-ready wording'].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-700" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </section>

        <section className="border-y border-slate-200 bg-white py-6">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6 px-6 text-sm font-medium text-slate-500">
            <span>NGOs</span>
            <span>Municipalities</span>
            <span>Consultants</span>
            <span>Public sector</span>
            <span>Media teams</span>
            <span>Educators</span>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-800">What it does</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">From scattered data to confident decisions.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              ProjectData Estonia works like a team of AI agents that search, clean, interpret and explain public data for real-world project and policy needs.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="transition hover:-translate-y-1 hover:shadow-lg">
                <div className="p-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-900">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{feature.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="personas" className="bg-slate-950 py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">Persona-driven</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">Choose the right mode for your work.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Each persona receives outputs tailored to their real task — from ESG summaries to policy briefs, funding evidence and public communication.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {personas.map((persona) => (
                <div key={persona} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <Users className="mb-4 h-5 w-5 text-emerald-300" />
                  <h3 className="font-medium">{persona}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="funding" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-800">Funding intelligence</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">Find suitable Estonia and EU project opportunities.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              ProjectData Estonia searches current funding calls, official programme pages and application guidance to help match project ideas with realistic opportunities.
            </p>

            <div className="mt-8 space-y-4">
              {['Official programme links and priorities', 'Eligibility and application requirements', 'Needs analysis evidence', 'Baseline and outcome indicators'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-emerald-700" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <Card className="rounded-[2rem] shadow-xl">
            <div className="p-7">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-900">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Trusted source layer</h3>
                  <p className="text-sm text-slate-500">Official sources first</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {sources.map((source) => (
                  <div key={source} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                    {source}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-emerald-900 px-8 py-16 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-semibold tracking-tight">Stop drowning in public data.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
              Start turning open data, funding calls and sustainability information into stronger projects, clearer communication and better decisions.
            </p>
            <div className="mt-8 flex justify-center">
              <Button variant="light" onClick={openAssistant} className="px-7 py-4 text-base">
                Open ProjectData Estonia AI <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>© 2026 ProjectData Estonia / Ökoskoop</p>
          <p>AI-powered sustainability and funding intelligence for Estonia and Europe.</p>
        </div>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
