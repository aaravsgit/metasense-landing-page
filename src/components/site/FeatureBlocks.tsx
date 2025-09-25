import Image from "next/image";
import { Reveal } from "@/components/anim/Reveal";

export function FeatureBlocks() {
  return (
    <div id="features" className="section grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="space-y-8">
        <Reveal><div className="glass p-7">
          <h3 className="text-xl font-semibold">Face recognition you control</h3>
          <p className="mt-2 text-sm text-white/70">
            Recognize familiar faces on demand with on-device detection. Profiles live in your account, not a public cloud.
          </p>
        </div></Reveal>

        <Reveal delay={0.07}><div className="glass p-7">
          <h3 className="text-xl font-semibold">Gentle prompts & contextual reminders</h3>
          <p className="mt-2 text-sm text-white/70">
            “This is Maya — neighbor from 3rd floor.” Add quick notes, birthdays, or “ask about their trip” prompts you can hear or see.
          </p>
        </div></Reveal>

        <Reveal delay={0.14}><div className="glass p-7">
          <h3 className="text-xl font-semibold">Practice, journaling & VR memory rooms</h3>
          <p className="mt-2 text-sm text-white/70">
            Turn moments into mini-quizzes, daily prompts, and (optional) VR spaces to revisit faces and events in an immersive way.
          </p>
        </div></Reveal>

        <Reveal delay={0.21}><div className="glass p-7">
          <h3 className="text-xl font-semibold">Speech screening (optional)</h3>
          <p className="mt-2 text-sm text-white/70">
            If audio is permitted, MetaSense can run lightweight checks inspired by research on speech patterns to flag “early concern” trends—not a diagnosis.
          </p>
        </div></Reveal>
      </div>

      <Reveal delay={0.12}>
        <div className="glass p-3">
          <div className="relative aspect-[4/3] w-full rounded-[20px] bg-black">
            <Image
              src="/demos/demo-glasses.svg"
              alt="Live recognition demo"
              fill
              className="rounded-[20px] object-cover"
            />
          </div>
        </div>
      </Reveal>
    </div>
  );
}
