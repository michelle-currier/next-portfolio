"use client";

import React from "react";
import { Flex, RevealFx } from "@/once-ui/components";
import {
  InfographicTile,
  InfographicSection,
} from "@/app/components/InfographicCard";

import {
  Collaboration,
  AcceleratingTransformation,
  Feedback_01,
  DesignLeadership,
  Research,
  ProcessAutomation,
  Process,
  SaasEnablement,
  Productivity,
  SystemsDevopsBuild,
  Printer,
  Rocket,
  User,
  Bee,
  SmallComponentsMakingALargerWhole,
  Overview,
  Visionary,
  TextLayout,
  Javascript,
  IbmAutomationPlatform,
  GlobalTechnologyServices,
  FocusOnCode,
  FullyManaged,
  FasterInnovationWithPartners,
  GraphicDesign,
  InfrastructureAsAService,
  NewFinancialCustomerExperiences,
  AiTransparency,
  ConceptExpansion,
  PersonalityInsights,
  AppDeveloper,
  UserExperienceDesign,
  DesignResearch,
  Ideate,
  RichTextFormat,
  MasterThreatHunting,
  Sports,
  DeliverInsights,
  HighFive,
  Cupcake,
  Docker,
  UserAnalytics,
} from "@carbon/pictograms-react";

export default function Infographic() {
  return (
    <Flex fillWidth maxWidth="m" direction="column">
      <RevealFx translateY="8" delay={0.2}>
        <h1>Disciplines infographic</h1>
      </RevealFx>
      <RevealFx translateY="8" delay={0.4}>
        <InfographicSection sectionTitle="Research Design" color="purple" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <InfographicTile
            heading="User interviews"
            body="Understand user pain points through generative prompts and research activities."
            icon={UserAnalytics}
            color="purple"
          />
          <InfographicTile
            heading="Persona development"
            body="Establish guidelines based on common pain points and key tasks users go through."
            icon={User}
            color="purple"
          />
          <InfographicTile
            heading="Usability testing"
            body="Identify usability issues to improve the user experience."
            icon={Research}
            color="purple"
          />
          <InfographicTile
            heading="User interviews"
            body="Understand user pain points through generative prompts and research activities."
            icon={DesignResearch}
            color="purple"
          />
        </div>
      </RevealFx>
      <RevealFx translateY="8" delay={0.8}>
        <InfographicSection sectionTitle="Design Process" color="magenta" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <InfographicTile
            color="magenta"
            heading="Prioritization"
            body="Rank and agree on the importance of a piece of work as it relates to resources and goals."
            icon={Productivity}
          />
          <InfographicTile
            heading="Sprint cycles"
            color="magenta"
            body="Keep the team iterating on a agree upon and established cadence."
            icon={Process}
          />
          <InfographicTile
            heading="Agile process"
            color="magenta"
            body="Break down implementation of user experiences in a consumable and scalable way."
            icon={SaasEnablement}
          />
          <InfographicTile
            heading="Cross-disciplinary"
            color="magenta"
            body="Unite people from different roles to get stuff done."
            icon={Overview}
          />
          <InfographicTile
            heading="Triage"
            color="magenta"
            body="Gather pending requests, backlog items and bugs that need prioritization."
            icon={DesignLeadership}
          />
          <InfographicTile
            heading="Scoping"
            color="magenta"
            body="Identify the minimum viable effort to enable and deliver a delightful experience."
            icon={ProcessAutomation}
          />
          <InfographicTile
            heading="Feedback"
            color="magenta"
            body="Provide empathetic and impersonal critique to any piece of work."
            icon={Feedback_01}
          />
        </div>
      </RevealFx>

      <InfographicSection sectionTitle="Visual Design" color="orange" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        <InfographicTile
          heading="Branding"
          color="orange"
          body="Design scalable artifacts and patterns that communicate a company's soul in a visual way."
          icon={Rocket}
        />
        <InfographicTile
          heading="Systems thinking"
          body="Apply patterns and concepts at scale across different environments and contexts"
          icon={SystemsDevopsBuild}
          color="orange"
        />
        <InfographicTile
          heading="Print design"
          body="Communicate a message visually through printed media."
          icon={Printer}
          color="orange"
        />
        <InfographicTile
          heading="Iconography"
          body="Create visual representations of actions, tasks and items at the smallest scale."
          icon={Bee}
          color="orange"
        />
        <InfographicTile
          heading="UI components"
          body="Design re-usable and responsive components for use on screen media."
          icon={SmallComponentsMakingALargerWhole}
          color="orange"
        />
        <InfographicTile
          heading="Accessibility"
          body="Enable all types of users to be able to leverage and enjoy a tool."
          icon={Visionary}
          color="orange"
        />
        <InfographicTile
          heading="Visual perception"
          body="Apply universal phycological principles to any design artifact."
          icon={AcceleratingTransformation}
          color="orange"
        />
      </div>

      <InfographicSection sectionTitle="User Experiences" color="yellow" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        <InfographicTile
          heading="Wireframing"
          color="yellow"
          body="Build user flows in lo-fidelty to quickly communicate an idea."
          icon={TextLayout}
        />
        <InfographicTile
          heading="Problem definition"
          color="yellow"
          body="Scope a problem into a consumableand actionable format the team can understand"
          icon={MasterThreatHunting}
        />
        <InfographicTile
          heading="Information Architecture"
          color="yellow"
          body="Construct the connections between different areas of a product or app."
          icon={ConceptExpansion}
        />
        <InfographicTile
          heading="Motion design"
          color="yellow"
          body="Communicate interactive behavior through the use of motion principles and tools."
          icon={Sports}
        />
        <InfographicTile
          heading="User flows"
          color="yellow"
          body="Diagram the interaction of a user with a system, and the actions that occur between them."
          icon={PersonalityInsights}
        />
        <InfographicTile
          heading="Prototyping"
          color="yellow"
          body="Experiment and test concepts through connecting multiple artifacts into one story."
          icon={AppDeveloper}
        />
        <InfographicTile
          heading="Concept development"
          color="yellow"
          body="Explore and ideate on large volume of possibilities in order to refine a direction."
          icon={UserExperienceDesign}
        />
      </div>

      <InfographicSection sectionTitle="Leadership" color="emerald" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        <InfographicTile
          heading="Mentoring"
          body="Become a go-to source of inspiration and advice to peers and colleagues alike."
          icon={DeliverInsights}
          color="emerald"
        />
        <InfographicTile
          heading="Facilitation"
          body="Enable conversations and activities between people across disciplines to reach a goal."
          icon={FasterInnovationWithPartners}
          color="emerald"
        />
        <InfographicTile
          heading="Conflict Resolution"
          body="Mediate between people when misunderstandings or frictions
                blocks any progress."
          icon={HighFive}
          color="emerald"
        />
        <InfographicTile
          heading="Customer-facing"
          body="Interface with real users and customers to understand their problems and build trust."
          icon={Cupcake}
          color="emerald"
        />
        <InfographicTile
          heading="Product stratedgy"
          body="Drive the direction, vision and mission of a product team or collective effort."
          icon={GraphicDesign}
          color="emerald"
        />
        <InfographicTile
          heading="Eminence"
          body="Let yourself known to others through publishing or speaking engagements."
          icon={Ideate}
          color="emerald"
        />
        <InfographicTile
          heading="Roadmapping"
          body="Enable the behavior of UI components and their relationships ot one another."
          icon={IbmAutomationPlatform}
          color="emerald"
        />
      </div>

      <InfographicSection sectionTitle="Front-end coding" color="cyan" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        <InfographicTile
          heading="HTML/CSS"
          body="Structure the skeleton and visual layer of a UI by building to design specs."
          icon={RichTextFormat}
          color="cyan"
        />
        <InfographicTile
          heading="Javascript"
          body="Build consumable and nimble applications following best practices."
          icon={Javascript}
          color="cyan"
        />
        <InfographicTile
          heading="Docker"
          body="Build platform as a service products that use OS-level virtualization to deliver software in packages called containers."
          icon={Docker}
          color="cyan"
        />
        <InfographicTile
          heading="Frameworks"
          body="Build consumable and nimble applications following best practices."
          icon={AppDeveloper}
          color="cyan"
        />
        <InfographicTile
          heading="Component libraries"
          body="Compile a system of reusable components to be shared across teams and offerings."
          icon={FullyManaged}
          color="cyan"
        />
        <InfographicTile
          heading="Code accessibility"
          body="Enable all types of users to be able to use a tool to complete a job or task."
          icon={FocusOnCode}
          color="cyan"
        />
        <InfographicTile
          heading="Globalization"
          body="Consider the scale aspects of code structures and components."
          icon={GlobalTechnologyServices}
          color="cyan"
        />
      </div>
      <InfographicSection sectionTitle="Content design" color="blue" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        <InfographicTile
          heading="Documentation"
          body="Compile technical processes and requirements to follow in order to maximize a tool's impact."
          icon={AiTransparency}
          color="blue"
        />
        <InfographicTile
          heading="User guidance & onboarding"
          body="Provide direction to the user to drive better adoption and use of an experience."
          icon={NewFinancialCustomerExperiences}
          color="blue"
        />
        <InfographicTile
          heading="Usability"
          body="Provide content patterns to aid in accessibility cases."
          icon={InfrastructureAsAService}
          color="blue"
        />
      </div>
    </Flex>
  );
}
