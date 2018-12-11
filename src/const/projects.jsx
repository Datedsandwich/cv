import React from 'react'

import Photo from 'assets/images/horse_mask.jpg'
import BipImage from 'assets/images/Bip.png'
import CholeraOutbreakImage from 'assets/images/cholera-outbreak.png'
import LightbringerImage from 'assets/images/lightbringer.png'
import ColorPsychologyImage from 'assets/images/color-psychology.png'

export const projects = [
  {
    link: 'https://github.com/Datedsandwich/cv',
    image: Photo,
    title: 'This CV',
    body: (
      <div>
        <p className="lr-u-soft-bottom">
          This site! Written to act as an online CV, and also to allow me to
          play around a bit with React and Webpack.
        </p>
      </div>
    ),
    key: 1
  },
  {
    link: 'http://bipthegame.com/',
    image: BipImage,
    title: 'Bip',
    body: (
      <div>
        <p className="lr-u-soft-bottom">
          A tiny android named bip finds himself alone at the bottom of a
          dumpster, with no memory of how he got there. Bip must solve puzzles
          and make important choices in order to discover the truth behind his
          abandonment, all the while dealing with his own feelings of loneliness
          and rejection.
        </p>
        <p>
          Players must interact with the game's environment to solve puzzles,
          avoid being disintegrated by lasers, rogue AIs and giant mechanical
          monsters.
        </p>
      </div>
    ),
    key: 2
  },
  {
    link: 'https://github.com/Datedsandwich/technically-difficult-engine',
    image: CholeraOutbreakImage,
    title: 'Cholera Outbreak',
    body: (
      <p>
        A game prototype made for a University assignment. Game Engine
        architecture created using C# and MonoGame to make a robust engine that
        can be used to easily create games. Game was made in just under 2 weeks
        using the engine we produced, to demonstrate it.
      </p>
    ),
    key: 3
  },
  {
    link: 'https://github.com/Datedsandwich/lightbringer',
    image: LightbringerImage,
    title: 'Lightbringer',
    body: (
      <div>
        <p className="lr-u-soft-bottom">
          A small proof of concept game made in my second year of University to
          explore mental illness, specifically Depression. The goal was to try
          and communicate to a player that does not suffer from depression, what
          depression might feel like. The prototype is only about 20 seconds
          long, but shows off the main mechanics, which were:
        </p>
        <ul className="lr-u-soft-left">
          <li>
            Colour fades from the scene as the "mood" of the player character
            drops
          </li>
          <li>Obstacles get harder as the player's mood worsens</li>
        </ul>
      </div>
    ),
    key: 4
  },
  {
    link: 'https://github.com/Datedsandwich/comp-3004-artefact',
    image: ColorPsychologyImage,
    title:
      'A Study on the effect of colour intensity on the emotional state of the viewer i' +
      'n a videogame',
    body: (
      <p>
        A game prototype made for a University assignment. A small game made in
        Unity which measures the players affective state as they play, and are
        exposed to different shades of red. The experiment produced no valid
        results, but I learned a lot from the experience.
      </p>
    ),
    key: 5
  }
]
