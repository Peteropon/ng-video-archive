import { Injectable } from '@angular/core';
import { IBand } from './band';

@Injectable({
  providedIn: 'root',
})
export class BandService {
  private bands: IBand[] = [
    {
      bandName: 'Muse Tribute',
      path: 'muse',
      videos: [
        {
          url: 'https://www.youtube.com/watch?v=PaJ9hE4fH6o',
          title: 'Stockholm Syndrome',
        },
        {
          title: 'Resistance',
          url: 'https://www.youtube.com/watch?v=8PRj_mDokyI',
        },
        {
          url: 'https://www.youtube.com/watch?v=JPus8xP-6w0',
          title: 'Newborn',
        },
      ],
    },
    {
      bandName: 'Disco 2006',
      path: 'disco2006',
      videos: [
        {
          title: 'Disco',
          url: 'https://www.youtube.com/watch?v=e0UXPoFjj7E',
        },
      ],
    },
    {
      bandName: 'Trip hop @ Posidi',
      path: 'triphopposidi',
      videos: [
        {
          title: 'Roads',
          url: 'https://www.youtube.com/watch?v=pqySZ9bn2gI',
        },
        {
          title: 'Teardrop',
          url: 'https://www.youtube.com/watch?v=Bpz1ZSHftWw',
        },
        {
          title: 'Hands around my throat/You make me feel',
          url: 'https://www.youtube.com/watch?v=xP16hRvAf2I',
        },
        {
          title: 'Child is my name',
          url: 'https://www.youtube.com/watch?v=Lqp_s09ooLo',
        },
        {
          title: 'Glory box',
          url: 'https://www.youtube.com/watch?v=I2ZvUmIK4D0',
        },
        {
          title: 'Stroker ace',
          url: 'https://www.youtube.com/watch?v=qfKvB-SrUq8',
        },
        {
          title: 'Otherwise',
          url: 'https://www.youtube.com/watch?v=s1OmOtTdWWI',
        },
      ],
    },
    {
      bandName: 'Trip hop @ ΑΠΘ',
      path: 'triphopapth',
      videos: [
        {
          title: 'Hotel',
          url: 'https://www.youtube.com/watch?v=3gjq2lsMa6k',
        },
        {
          title: 'Child is my name',
          url: 'https://www.youtube.com/watch?v=gE3iGLLVF5I',
        },
        {
          title: 'Hands around my throat/You make me feel',
          url: 'https://www.youtube.com/watch?v=WqcI-1Uvj9c',
        },
        {
          title: 'Glory box',
          url: 'https://www.youtube.com/watch?v=s1OmOtTdWWI',
        },
        {
          title: 'Teardrop',
          url: 'https://www.youtube.com/watch?v=gGhUW0O66Qk',
        },
        {
          title: 'Stroker ace',
          url: 'https://www.youtube.com/watch?v=WRNA8qH1pXs',
        },
        {
          title: 'Roads',
          url: 'https://www.youtube.com/watch?v=H-MLbCRyJOo',
        },
        {
          title: 'Otherwise',
          url: 'https://www.youtube.com/watch?v=mTYXimX89AQ',
        },
      ],
    },
    {
      bandName: '905 @ Posidi',
      path: '905posidi',
      videos: [
        {
          title: 'Would?',
          url: 'https://www.youtube.com/watch?v=gs5k9HeL2kE',
        },
        {
          title: 'Go with the flow',
          url: 'https://www.youtube.com/watch?v=eubmWBE_lH8',
        },
        {
          title: 'Where did you sleep last night',
          url: 'https://www.youtube.com/watch?v=PqWnv8Ma11w',
        },
        {
          title: 'Jeremy',
          url: 'https://www.youtube.com/watch?v=_Ac_30iNZH8',
        },
        {
          title: 'Like a stone',
          url: 'https://www.youtube.com/watch?v=nSj6iGeOnv0',
        },
        {
          title: 'Stone the crow',
          url: 'https://www.youtube.com/watch?v=CzTe7zTIHsY',
        },
      ],
    },
    {
      bandName: '905 @ ΑΠΘ',
      path: '905apth',
      videos: [
        {
          title: 'The Outsider',
          url: 'https://www.youtube.com/watch?v=AoZrTEGFcqw',
        },
        {
          title: 'The pot',
          url: 'https://www.youtube.com/watch?v=8esKYtdPqU8',
        },
        {
          title: 'Jeremy',
          url: 'https://www.youtube.com/watch?v=7y0hu-uNZn8',
        },
        {
          title: 'Where did you sleep last night',
          url: 'https://www.youtube.com/watch?v=rE2m0DwH5OA',
        },
        {
          title: 'Would?',
          url: 'https://www.youtube.com/watch?v=H0avQ65K_IA',
        },
        {
          title: 'Digging the grave',
          url: 'https://www.youtube.com/watch?v=T2ppDMVvPHE',
        },
        {
          title: 'Stone the crow',
          url: 'https://www.youtube.com/watch?v=7J1r2fXW_uA',
        },
        {
          title: 'Like a stone',
          url: 'https://www.youtube.com/watch?v=Q8eKaDIpOq0',
        },
      ],
    },
    {
      bandName: 'Mano Negra Tribute @ Posidi',
      path: 'manonegraposidi',
      videos: [
        {
          title: 'Indios de Barcelona',
          url: 'https://www.youtube.com/watch?v=_sUtzSxAwOg',
        },
        {
          title: "Sidi h'bibi",
          url: 'https://www.youtube.com/watch?v=xklvWCTOjGs',
        },
        {
          title: 'Senor Matanza',
          url: 'https://www.youtube.com/watch?v=uxsEQYwNQv0',
        },
        {
          title: 'Letter to the censors',
          url: 'https://www.youtube.com/watch?v=v8-EBqlD-F4',
        },
        {
          title: 'King of the Bongo',
          url: 'https://www.youtube.com/watch?v=DUIsjPwnUr4',
        },
        {
          title: 'Soledad',
          url: 'https://www.youtube.com/watch?v=CwmzxfAKa4o',
        },
        {
          title: 'Mala vida',
          url: 'https://www.youtube.com/watch?v=PKrY2j1jNls',
        },
        {
          title: 'Out of time man',
          url: 'https://www.youtube.com/watch?v=iMc9cfO-IzI',
        },
        {
          title: 'Salga la luna/King kong 5',
          url: 'https://www.youtube.com/watch?v=TNqu1aiT0os',
        },
        {
          title: 'Patchuko hop',
          url: 'https://www.youtube.com/watch?v=xZBsyedXvJU',
        },
      ],
    },
    {
      bandName: 'Mano Negra Tribute @ ΑΠΘ',
      path: 'manonegraapth',
      videos: [
        {
          title: 'Indios de Barcelona',
          url: 'https://www.youtube.com/watch?v=19MvQTEqJWw',
        },
        {
          title: "Sidi h'bibi",
          url: 'https://www.youtube.com/watch?v=Vfl-WLkNbvg',
        },
        {
          title: 'Senor Matanza',
          url: 'https://www.youtube.com/watch?v=oOU_Q7jUjDQ',
        },
        {
          title: 'Letter to the censors',
          url: 'https://www.youtube.com/watch?v=mOQ0u4RUl1A',
        },
        {
          title: 'King of the Bongo',
          url: 'https://www.youtube.com/watch?v=pFI7blSBesQ',
        },
        {
          title: 'Soledad',
          url: 'https://www.youtube.com/watch?v=iqpjp8kl3VQ',
        },
        {
          title: 'Mala vida',
          url: 'https://www.youtube.com/watch?v=ZrskMDV2Mhk',
        },
        {
          title: 'Out of time man',
          url: 'https://www.youtube.com/watch?v=8uHr6tLB4Rc',
        },
        {
          title: 'King kong 5',
          url: 'https://www.youtube.com/watch?v=UH3-0qWuFwY',
        },
        {
          title: 'Patchuko hop',
          url: 'https://www.youtube.com/watch?v=uiahX2J8DrU',
        },
        {
          title: 'Salga la luna',
          url: 'https://www.youtube.com/watch?v=zXu5YWypkGI',
        },
      ],
    },
    {
      bandName: 'Ελληνικο Ροκ @ Posidi',
      path: 'elrockposidi',
      videos: [
        {
          title: 'Το 69',
          url: 'https://www.youtube.com/watch?v=ashx1sjkSF8',
        },
        {
          title: 'Ότι θες εσύ',
          url: 'https://www.youtube.com/watch?v=Vq6CfpzP0JQ',
        },
        {
          title: 'Αδρεναλίνη',
          url: 'https://www.youtube.com/watch?v=l4UYhk2XMRU',
        },
        {
          title: 'Νιώθω ενοχές',
          url: 'https://www.youtube.com/watch?v=DSnrsVJtDjc',
        },
        {
          title: 'Μια φορά',
          url: 'https://www.youtube.com/watch?v=27ZyambePG4',
        },
        {
          title: 'Δεν θέλω',
          url: 'https://www.youtube.com/watch?v=nDroY2Ehaa0',
        },
        {
          title: 'Χάρτινο τσίρκο',
          url: 'https://www.youtube.com/watch?v=ZjMbt7KlwVA',
        },
        {
          title: 'Τον ίδιο το θεό',
          url: 'https://www.youtube.com/watch?v=3YOJsaQXKbw',
        },
        {
          title: 'Εδώ',
          url: 'https://www.youtube.com/watch?v=ehXdKXf_Qus',
        },
        {
          title: 'Πιάνω φωτιά',
          url: 'https://www.youtube.com/watch?v=C2XyXnhRp20',
        },
      ],
    },
    {
      bandName: 'Ελληνικο Ροκ @ ΑΠΘ',
      path: 'elrockapth',
      videos: [
        {
          title: 'Το 69',
          url: 'https://www.youtube.com/watch?v=ABvNu2NFbbw',
        },
        {
          title: 'Ότι θες εσύ',
          url: 'https://www.youtube.com/watch?v=FJrRbigWerY',
        },
        {
          title: 'Αδρεναλίνη',
          url: 'https://www.youtube.com/watch?v=5wImxyKPKgM',
        },
        {
          title: 'Νιώθω ενοχές',
          url: 'https://www.youtube.com/watch?v=oP83IR7NNJg',
        },
        {
          title: 'Μια φορά',
          url: 'https://www.youtube.com/watch?v=CIBzlyBZkf0',
        },
        {
          title: 'Δεν θέλω',
          url: 'https://www.youtube.com/watch?v=MTepDrxPhf0',
        },
        {
          title: 'Χάρτινο τσίρκο',
          url: 'https://www.youtube.com/watch?v=obsQk-ypuu0',
        },
        {
          title: 'Τον ίδιο το θεό',
          url: 'https://www.youtube.com/watch?v=S1Mf3aTkanA',
        },
        {
          title: 'Εδώ',
          url: 'https://www.youtube.com/watch?v=g1Zbt0Y01tI',
        },
        {
          title: 'Πιάνω φωτιά',
          url: 'https://www.youtube.com/watch?v=fthMloSO2-s',
        },
        {
          title: 'Παυσίπονο',
          url: 'https://www.youtube.com/watch?v=E5MY0exRTgs',
        },
      ],
    },
    {
      bandName: 'Six & The City',
      path: 'six&thecity',
      videos: [
        {
          title: 'Saturday night fever',
          url: 'https://www.youtube.com/watch?v=g9TLeaaIT3c',
        },
        {
          title: 'Rock n roll medley',
          url: 'https://www.youtube.com/watch?v=GkdaZno23sk',
        },
        {
          title: 'Disco medley',
          url: 'https://www.youtube.com/watch?v=uz7c8FUCRos',
        },
        {
          title: 'Are you gonna be my girl',
          url: 'https://www.youtube.com/watch?v=kTkRsw2dulE',
        },
        {
          title: 'Crazy in love/Crazy',
          url: 'https://www.youtube.com/watch?v=LEuEm8BrJ-g',
        },
        {
          title: 'Mercy',
          url: 'https://www.youtube.com/watch?v=0TnhsMQP5Nw',
        },
        {
          title: "Let's get it started",
          url: 'https://www.youtube.com/watch?v=dy1_noYGmz0',
        },
        {
          title: 'How gee/Σε θέλω',
          url: 'https://www.youtube.com/watch?v=SoQHUILhpqk',
        },
        {
          title: 'Superstition',
          url: 'https://www.youtube.com/watch?v=rwkuqDNz28g',
        },
        {
          title: 'You had me',
          url: 'https://www.youtube.com/watch?v=N7Ms1KbZ_nw',
        },
        {
          title: 'Ghostbusters',
          url: 'https://www.youtube.com/watch?v=se8_rxPqpQ8',
        },
        {
          title: 'Fuck U',
          url: 'https://www.youtube.com/watch?v=ECdIdgbi29o',
        },
        {
          title: 'I feel good',
          url: 'https://www.youtube.com/watch?v=1grTQrrXIHM',
        },
        {
          title: 'Next to you',
          url: 'https://www.youtube.com/watch?v=TTPzl5XTjms',
        },
      ],
    },
    {
      bandName: '90s 2011',
      path: '90s',
      videos: [
        {
          title: 'Everybody',
          url: 'https://www.youtube.com/watch?v=hh7UPqN8D2g',
        },
        {
          title: 'Kiss me',
          url: 'https://www.youtube.com/watch?v=zvT5MbadW_o',
        },
        {
          title: 'Tubthumping',
          url: 'https://www.youtube.com/watch?v=fTFI1zu-a9Q',
        },
        {
          title: 'Bad touch',
          url: 'https://www.youtube.com/watch?v=bcmIAVI2TWg',
        },
      ],
    },
    {
      bandName: 'Metal 2004',
      path: 'metal2004',
      videos: [
        {
          title: 'Runaway',
          url: 'https://www.youtube.com/watch?v=whnLi-4CgFA',
        },
        {
          title: 'Rock n roll all night',
          url: 'https://www.youtube.com/watch?v=9yvU7V_zzLw',
        },
        {
          title: 'Trust',
          url: 'https://www.youtube.com/watch?v=pBY0OO28eoA',
        },
        {
          title: 'When the crowds are gone',
          url: 'https://www.youtube.com/watch?v=zp1rt6SrILo',
        },
        {
          title: "Nodody's fool",
          url: 'https://www.youtube.com/watch?v=luH0MQxM24Q',
        },
        {
          title: 'Fade to black',
          url: 'https://www.youtube.com/watch?v=ezw8mu40ix4',
        },
      ],
    },
  ];

  getBands(): IBand[] {
    return this.bands;
  }

  getBand(path: string): IBand | undefined {
    if (path) {
      const band = this.bands.find((b) => b.path === path);
      return band;
    }
    return undefined;
  }
}
