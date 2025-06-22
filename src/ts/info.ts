export const introduction =
  "Hey! I'm Aurex — a Roblox Studio scripter with 5 years of experience creating immersive, data-driven games.";

export const canDo = [
  'Datastore mechanics',
  'VFX Scripting',
  'FPS/TPS Shooter Systems',
  'Simulator Games',
  'Tycoon Games',
];

export const cannotDo = ['Advanced Vehicle Systems'];

export type Job = {
  title: string;
  image: string;
  description: string;
};

export const jobs: Job[] = [
  {
    title: 'Grow a Garden Game',
    image: '../../assets/preview_1.png',
    description: 'Added saving of mutations and plants grown from trees.',
  },
  {
    title: 'FPS Game',
    image: '../../assets/preview_2.png',
    description: 'Made an FPS Framework completely from scratch',
  },
  {
    title: 'Pet Game',
    image: '../../assets/preview_3.png',
    description:
      'Built a Pet Simulator X - Styled Game with hatching pets and custom coins multiplier.',
  },
];

export const contactLink = 'discord.gg/rodevs';
