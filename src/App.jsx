import { useState } from 'react';
import Navbar from './components/Navbar';
import StatusBar from './components/StatusBar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import ProposedModel from './components/ProposedModel';
import Workflow from './components/Workflow';
import Technology from './components/Technology';
import DigitalTwin from './components/DigitalTwin';
import MissionControl from './components/MissionControl';
import CockpitModal from './components/CockpitModal';
import HumanInLoop from './components/HumanInLoop';
import Impact from './components/Impact';
import Roadmap from './components/Roadmap';
import TeamSection from './components/TeamSection';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [cockpitOpen, setCockpitOpen] = useState(false);

  return (
    <>
      <Navbar onLaunchCockpit={() => setCockpitOpen(true)} />

      <main className="w-full pt-16 bg-surface">
        <StatusBar />
        <Hero />
        <Problem />
        <Solution />
        <ProposedModel />
        <Workflow />
        <Technology />
        <DigitalTwin />
        <MissionControl onLaunchCockpit={() => setCockpitOpen(true)} />
        <HumanInLoop />
        <Impact />
        <Roadmap />
        <TeamSection />
        <CTA onLaunchCockpit={() => setCockpitOpen(true)} />
      </main>

      <Footer />

      <CockpitModal
        isOpen={cockpitOpen}
        onClose={() => setCockpitOpen(false)}
      />
    </>
  );
}

export default App;
