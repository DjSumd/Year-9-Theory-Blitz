// Year 9 Music · Theory — full syllabus for Notate.
// types: notate | choice (optional `show` notation) | match
// Each unit has a `guide` (how to work it out, no answers given away).
const IVL=['m2','M2','m3','M3','P4','P5','m6','M6','m7','M7','P8'];

const UNITS=[
{ id:'u1', name:'Notation',
  guide:`<b>Reading a note</b>
   <ol><li><b>Clef first.</b> Treble lines are <b>E G B D F</b> (bottom→top), spaces spell <b>F A C E</b>. Bass lines are <b>G B D F A</b>, spaces <b>A C E G</b>.</li>
   <li><b>Count from a line you know.</b> Step up a line→space→line = next letter; the musical alphabet is A B C D E F G then back to A.</li>
   <li><b>Ledger lines</b> carry on the same stepping above or below the staff. Middle C sits one ledger below the treble staff and one above the bass.</li>
   <li><b>Octave numbers (SPN):</b> middle C = C4. Each higher C is C5, C6…; each lower is C3, C2…</li></ol>
   <b>Writing a note:</b> find the exact line or space for that letter, then click it.`,
  qs:[
  {t:'notate',prompt:'Notate: A, C, E, G',sub:'Treble clef. Tonic given.',clef:'treble',given:1,notes:[['A',4,''],['C',5,''],['E',5,''],['G',5,'']]},
  {t:'notate',prompt:'Notate: D, F, A, C',sub:'Bass clef. Tonic given.',clef:'bass',given:1,notes:[['D',3,''],['F',3,''],['A',3,''],['C',4,'']]},
  {t:'notate',prompt:'Notate: G, B, D, F',sub:'Treble clef (the lines). Tonic given.',clef:'treble',given:1,notes:[['G',4,''],['B',4,''],['D',5,''],['F',5,'']]},
  {t:'notate',prompt:'Notate: F, A, C, E',sub:'Treble spaces. Tonic given.',clef:'treble',given:1,notes:[['F',4,''],['A',4,''],['C',5,''],['E',5,'']]},
  {t:'choice',prompt:'Name this note.',show:{clef:'treble',cols:[['E4']]},options:['C','D','E','F','G'],answer:'E'},
  {t:'choice',prompt:'Name this note.',show:{clef:'treble',cols:[['C5']]},options:['A','B','C','D','E'],answer:'C',why:'Third space of the treble staff.'},
  {t:'choice',prompt:'Name this note.',show:{clef:'bass',cols:[['F3']]},options:['D','E','F','G','A'],answer:'F',why:'Fourth line of the bass staff, between the F-clef dots.'},
  {t:'choice',prompt:'Name this note (ledger line).',show:{clef:'treble',cols:[['C6']]},options:['A','B','C','D'],answer:'C',why:'Two octaves above middle C.'},
  {t:'choice',prompt:'Middle C in scientific pitch notation is…',options:['C3','C4','C5'],answer:'C4'},
  {t:'choice',prompt:'The treble-clef spaces (bottom to top) spell…',options:['FACE','EGBDF','GBDFA'],answer:'FACE'},
  {t:'choice',prompt:'The bass-clef lines (bottom to top) are…',options:['E G B D F','G B D F A','F A C E G'],answer:'G B D F A'},
]},

{ id:'u2', name:'Rhythm',
  guide:`<b>Working out metre</b>
   <ol><li><b>Simple vs compound:</b> in simple time the beat splits into <b>2</b>; in compound it splits into <b>3</b>, and the beat is a <b>dotted crotchet</b>.</li>
   <li><b>Compound beats:</b> divide the top number by 3. 6/8 → 2 beats, 9/8 → 3, 12/8 → 4.</li>
   <li><b>Triplet:</b> 3 equal notes in the time of 2. Three triplet quavers last one crotchet.</li>
   <li><b>Swing:</b> straight quavers are <b>played</b> long–short, based on a triplet feel — the basis of jazz phrasing.</li></ol>`,
  qs:[
  {t:'choice',prompt:'In simple time the beat divides into…',options:['two','three','four'],answer:'two'},
  {t:'choice',prompt:'In compound time the beat divides into…',options:['two','three','six'],answer:'three'},
  {t:'choice',prompt:'The beat note in 6/8 (all compound time) is a…',options:['crotchet','dotted crotchet','quaver'],answer:'dotted crotchet'},
  {t:'choice',prompt:'How many beats in a 12/8 bar?',options:['3','4','6'],answer:'4',why:'12 quavers ÷ 3 = 4 dotted-crotchet beats.'},
  {t:'choice',prompt:'How many beats in a 9/8 bar?',options:['2','3','4'],answer:'3'},
  {t:'choice',prompt:'Is 6/8 simple or compound?',options:['simple','compound'],answer:'compound'},
  {t:'choice',prompt:'Is 3/4 simple or compound?',options:['simple','compound'],answer:'simple'},
  {t:'choice',prompt:'A triplet fits three equal notes into the time of…',options:['one','two','four'],answer:'two'},
  {t:'choice',prompt:'Three triplet quavers last the same as…',options:['one crotchet','one minim','two crotchets'],answer:'one crotchet'},
  {t:'choice',prompt:'In a swing feel, written straight quavers are played…',options:['short–long','long–short','evenly'],answer:'long–short'},
  {t:'choice',prompt:'The swing feel is based on dividing the beat into a…',options:['duplet','triplet','quadruplet'],answer:'triplet'},
  {t:'choice',prompt:'In 6/8, quavers are beamed in groups of…',options:['two','three','four'],answer:'three'},
  {t:'choice',prompt:'A tie joins two notes of the…',options:['same pitch','same length','next beat'],answer:'same pitch'},
  {t:'choice',prompt:'An anacrusis is…',options:['a pick-up before bar 1','an accent on the off-beat','a held note'],answer:'a pick-up before bar 1'},
  {t:'choice',prompt:'Syncopation places the accent on…',options:['the first beat','a weak / off-beat','the last bar'],answer:'a weak / off-beat'},
  {t:'match',prompt:'Match each tempo term to its meaning.',pairs:[['andante','at a walking pace'],['allegretto','fairly quick'],['rallentando','gradually slower'],['accelerando','gradually faster'],['a tempo','back to the original speed']]},
  {t:'choice',prompt:'Order from slowest to fastest:',options:['largo, andante, allegretto','andante, largo, allegretto','allegretto, andante, largo'],answer:'largo, andante, allegretto'},
]},

{ id:'u3', name:'Scales',
  guide:`<b>Building a scale</b>
   <ol><li><b>Write the letters first</b> — one of each, from the tonic up to its octave (e.g. A B C D E F G A). No letter repeated, none missed.</li>
   <li><b>Apply the pattern of tones/semitones</b> by adding sharps or flats so each gap matches:<br>Major = <b>T T S T T T S</b> · Natural minor = <b>T S T T S T T</b> · Harmonic minor = natural minor with a <b>raised 7th</b>.</li>
   <li><b>Spell consistently:</b> a scale uses sharps <i>or</i> flats, not a mix. Check against the key's signature (see the Circle of 5ths tab).</li></ol>`,
  qs:[
  {t:'notate',prompt:'A major, ascending',sub:'3 sharps. Tonic given.',clef:'treble',given:1,notes:[['A',4,''],['B',4,''],['C',5,'s'],['D',5,''],['E',5,''],['F',5,'s'],['G',5,'s'],['A',5,'']]},
  {t:'notate',prompt:'E♭ major, ascending',sub:'3 flats. Tonic given.',clef:'treble',given:1,notes:[['E',4,'f'],['F',4,''],['G',4,''],['A',4,'f'],['B',4,'f'],['C',5,''],['D',5,''],['E',5,'f']]},
  {t:'notate',prompt:'G major, ascending',sub:'1 sharp. Tonic given.',clef:'treble',given:1,notes:[['G',4,''],['A',4,''],['B',4,''],['C',5,''],['D',5,''],['E',5,''],['F',5,'s'],['G',5,'']]},
  {t:'notate',prompt:'F major, ascending',sub:'1 flat. Tonic given.',clef:'treble',given:1,notes:[['F',4,''],['G',4,''],['A',4,''],['B',4,'f'],['C',5,''],['D',5,''],['E',5,''],['F',5,'']]},
  {t:'notate',prompt:'F♯ natural minor, ascending',sub:'3 sharps. Tonic given.',clef:'treble',given:1,notes:[['F',4,'s'],['G',4,'s'],['A',4,''],['B',4,''],['C',5,'s'],['D',5,''],['E',5,''],['F',5,'s']]},
  {t:'notate',prompt:'C natural minor, ascending',sub:'3 flats. Tonic given.',clef:'treble',given:1,notes:[['C',4,''],['D',4,''],['E',4,'f'],['F',4,''],['G',4,''],['A',4,'f'],['B',4,'f'],['C',5,'']]},
  {t:'notate',prompt:'A harmonic minor, ascending',sub:'Raised 7th. Tonic given.',clef:'treble',given:1,notes:[['A',4,''],['B',4,''],['C',5,''],['D',5,''],['E',5,''],['F',5,''],['G',5,'s'],['A',5,'']]},
  {t:'notate',prompt:'E harmonic minor, ascending',sub:'Raised 7th. Tonic given.',clef:'treble',given:1,notes:[['E',4,''],['F',4,'s'],['G',4,''],['A',4,''],['B',4,''],['C',5,''],['D',5,'s'],['E',5,'']]},
  {t:'notate',prompt:'A blues scale, ascending',sub:'A C D E♭ E G A. Tonic given.',clef:'treble',given:1,notes:[['A',4,''],['C',5,''],['D',5,''],['E',5,'f'],['E',5,'n'],['G',5,''],['A',5,'']]},
  {t:'choice',prompt:'The major scale pattern (T = tone, S = semitone) is…',options:['T T S T T T S','T S T T S T T','T T T S T T S'],answer:'T T S T T T S'},
  {t:'choice',prompt:'The natural minor scale pattern is…',options:['T S T T S T T','T T S T T T S','S T T S T T T'],answer:'T S T T S T T'},
  {t:'choice',prompt:'In the major scale, the semitones fall between degrees…',options:['2–3 and 5–6','3–4 and 7–8','1–2 and 4–5'],answer:'3–4 and 7–8'},
  {t:'choice',prompt:'The harmonic minor scale raises which degree?',options:['the 6th','the 7th','the 5th'],answer:'the 7th'},
  {t:'choice',prompt:'The relative minor of C major is…',options:['A minor','E minor','D minor'],answer:'A minor'},
  {t:'choice',prompt:'Changing key within a piece is called…',options:['transposition','modulation','inversion'],answer:'modulation'},
]},

{ id:'u4', name:'Intervals',
  guide:`<b>Naming an interval</b>
   <ol><li><b>Number</b> = count letter names from the lower note to the upper, <b>including both</b>. C up to A = C D E F G A = a 6th.</li>
   <li><b>Quality</b> = count the <b>semitones</b>, then compare: 2nds/3rds/6ths/7ths are <b>major</b> (larger) or <b>minor</b> (one semitone smaller); 4ths/5ths/octaves are <b>perfect</b>.</li>
   <li><b>Writing above a note:</b> step up the right number of letters, then adjust with a sharp/flat so the semitones match (M6 = 9, m6 = 8, M7 = 11, m7 = 10, P8 = 12).</li>
   <li><b>Descending</b> is measured the same way, downward from the top note.</li></ol>`,
  qs:[
  {t:'notate',prompt:'Write a major 6th above C.',sub:'Place the upper note. Lower note given.',clef:'treble',given:1,notes:[['C',4,''],['A',4,'']]},
  {t:'notate',prompt:'Write a minor 6th above C.',sub:'Place the upper note.',clef:'treble',given:1,notes:[['C',4,''],['A',4,'f']]},
  {t:'notate',prompt:'Write a major 7th above C.',sub:'Place the upper note.',clef:'treble',given:1,notes:[['C',4,''],['B',4,'']]},
  {t:'notate',prompt:'Write a minor 7th above C.',sub:'Place the upper note.',clef:'treble',given:1,notes:[['C',4,''],['B',4,'f']]},
  {t:'notate',prompt:'Write a perfect 5th above D.',sub:'Place the upper note.',clef:'treble',given:1,notes:[['D',4,''],['A',4,'']]},
  {t:'notate',prompt:'Write a major 3rd above G.',sub:'Place the upper note.',clef:'treble',given:1,notes:[['G',4,''],['B',4,'']]},
  {t:'notate',prompt:'Write a major 6th above E.',sub:'Place the upper note (watch the accidental).',clef:'treble',given:1,notes:[['E',4,''],['C',5,'s']]},
  {t:'notate',prompt:'Write a perfect octave above C.',sub:'Place the upper note.',clef:'treble',given:1,notes:[['C',4,''],['C',5,'']]},
  {t:'notate',prompt:'Write a minor 6th below C5.',sub:'Place the lower note.',clef:'treble',given:1,notes:[['C',5,''],['E',4,'']]},
  {t:'notate',prompt:'Write a major 6th below A.',sub:'Place the lower note.',clef:'treble',given:1,notes:[['A',4,''],['C',4,'']]},
  {t:'choice',prompt:'Name this interval.',show:{clef:'treble',cols:[['C4'],['A4']]},options:IVL,answer:'M6'},
  {t:'choice',prompt:'Name this interval.',show:{clef:'treble',cols:[['C4'],['Bb4']]},options:IVL,answer:'m7'},
  {t:'choice',prompt:'Name this interval.',show:{clef:'treble',cols:[['E4'],['C5']]},options:IVL,answer:'m6'},
  {t:'choice',prompt:'Name this interval.',show:{clef:'treble',cols:[['C4'],['C5']]},options:IVL,answer:'P8'},
  {t:'choice',prompt:'How many semitones in a major 6th?',options:['8','9','10'],answer:'9'},
  {t:'choice',prompt:'How many semitones in a minor 7th?',options:['9','10','11'],answer:'10'},
  {t:'choice',prompt:'6ths and 7ths are described as major or…',options:['perfect','minor','diminished'],answer:'minor'},
]},

{ id:'u5', name:'Chords',
  guide:`<b>Building a triad</b>
   <ol><li><b>Stack two 3rds on the root</b> — root, the note two letters up, and two letters up again (e.g. C → E → G).</li>
   <li><b>Major</b> = major 3rd then minor 3rd (4 + 3 semitones). <b>Minor</b> = minor 3rd then major 3rd (3 + 4). Adjust with accidentals to match.</li>
   <li><b>Primary chords</b> are I, IV, V (degrees 1, 4, 5). In a minor key i and iv are minor, V is made major.</li>
   <li><b>V7</b> adds a minor 7th above the dominant triad (four notes).</li></ol>`,
  qs:[
  {t:'notate',prompt:'Notate a C major triad.',sub:'Root, 3rd, 5th (lowest to highest). Root given.',clef:'treble',given:1,notes:[['C',4,''],['E',4,''],['G',4,'']]},
  {t:'notate',prompt:'Notate a G major triad.',sub:'Lowest to highest. Root given.',clef:'treble',given:1,notes:[['G',4,''],['B',4,''],['D',5,'']]},
  {t:'notate',prompt:'Notate a D minor triad.',sub:'Lowest to highest. Root given.',clef:'treble',given:1,notes:[['D',4,''],['F',4,''],['A',4,'']]},
  {t:'notate',prompt:'Notate an A minor triad.',sub:'Lowest to highest. Root given.',clef:'treble',given:1,notes:[['A',4,''],['C',5,''],['E',5,'']]},
  {t:'notate',prompt:'Notate a D major triad.',sub:'Watch the accidental. Root given.',clef:'treble',given:1,notes:[['D',4,''],['F',4,'s'],['A',4,'']]},
  {t:'notate',prompt:'Notate an F major triad.',sub:'Lowest to highest. Root given.',clef:'treble',given:1,notes:[['F',4,''],['A',4,''],['C',5,'']]},
  {t:'choice',prompt:'A major triad is a major 3rd then a…',options:['major 3rd','minor 3rd','perfect 4th'],answer:'minor 3rd'},
  {t:'choice',prompt:'Name this triad.',show:{clef:'treble',cols:[['C4','E4','G4']]},options:['C major','C minor','A minor'],answer:'C major'},
  {t:'choice',prompt:'Name this triad.',show:{clef:'treble',cols:[['D4','F4','A4']]},options:['D major','D minor','F major'],answer:'D minor'},
  {t:'choice',prompt:'Name this triad.',show:{clef:'treble',cols:[['E4','G4','B4']]},options:['E major','E minor','G major'],answer:'E minor'},
  {t:'choice',prompt:'The primary triads I, IV and V sit on scale degrees…',options:['1, 3 and 5','1, 4 and 5','1, 4 and 6'],answer:'1, 4 and 5'},
  {t:'choice',prompt:'In a minor key, chords i and iv are minor but V is made…',options:['diminished','major','augmented'],answer:'major',why:'The leading note is raised to make V major.'},
  {t:'choice',prompt:'The chord vi in a major key is…',options:['major','minor','diminished'],answer:'minor'},
  {t:'choice',prompt:'Complete the pop progression: I – V – vi – …',options:['II','IV','iii'],answer:'IV'},
  {t:'choice',prompt:'A dominant 7th (V7) adds which interval above the triad?',options:['a major 7th','a minor 7th','a major 6th'],answer:'a minor 7th'},
  {t:'choice',prompt:'In C major, V7 (G7) is spelled…',options:['G B D F','G B D F♯','G B♭ D F'],answer:'G B D F'},
]},

{ id:'u6', name:'Devices',
  guide:`<b>Spotting the device</b>
   <ul><li><b>Riff</b> — a short, catchy phrase repeated through a song.</li>
   <li><b>Ostinato</b> — a pattern repeated persistently.</li>
   <li><b>Pedal</b> — one sustained/repeated note held under changing chords.</li>
   <li><b>Sequence</b> — an idea repeated immediately higher or lower.</li>
   <li><b>Theme</b> — the main idea; develop it (theme and variations) by changing rhythm, melody, harmony or texture.</li>
   <li><b>Inversion</b> turns an idea upside-down; <b>augmentation/diminution</b> stretch or shrink its note values.</li></ul>`,
  qs:[
  {t:'match',prompt:'Match each device to what it is.',pairs:[['Riff','a short, catchy repeated phrase'],['Ostinato','a pattern repeated persistently'],['Pedal','a sustained/repeated note under changing harmony'],['Sequence','an idea repeated higher or lower']]},
  {t:'choice',prompt:'A short catchy guitar or bass phrase repeated through a song is a…',options:['riff','pedal','sequence'],answer:'riff'},
  {t:'choice',prompt:'A single bass note held under changing chords is a…',options:['riff','pedal','ostinato'],answer:'pedal'},
  {t:'choice',prompt:'A motif repeated a step higher, then higher again, is a…',options:['sequence','ostinato','inversion'],answer:'sequence'},
  {t:'choice',prompt:'The main musical idea of a piece is called the…',options:['motif','theme','riff'],answer:'theme'},
  {t:'choice',prompt:'Restating a theme with changes each time produces…',options:['a sequence','theme and variations','an ostinato'],answer:'theme and variations'},
  {t:'choice',prompt:'Turning a melodic idea upside-down is called…',options:['inversion','augmentation','imitation'],answer:'inversion'},
]},

{ id:'u7', name:'Dynamics',
  guide:`<b>Reading dynamics &amp; articulation</b>
   <ul><li><b>Soft → loud:</b> pp, p, mp, mf, f, ff. (p = piano/soft, f = forte/loud, m = mezzo/moderately.)</li>
   <li><b>Change over time:</b> crescendo = gradually louder; decrescendo/diminuendo = gradually softer; sfz = a sudden strong accent.</li>
   <li><b>Articulation:</b> staccato = short/detached; legato = smooth/joined; accent = stress it; tenuto = held full value.</li>
   <li>Changing dynamics and articulation shapes <b>contrast</b> and can even alter the <b>timbre</b>.</li></ul>`,
  qs:[
  {t:'match',prompt:'Match each dynamic sign to its meaning.',pairs:[['pp','very soft'],['mp','moderately soft'],['mf','moderately loud'],['ff','very loud'],['sfz','a sudden strong accent']]},
  {t:'choice',prompt:'A crescendo means gradually…',options:['softer','louder','slower'],answer:'louder'},
  {t:'choice',prompt:'A decrescendo (diminuendo) means gradually…',options:['louder','softer','faster'],answer:'softer'},
  {t:'choice',prompt:'Order from softest to loudest:',options:['mf, pp, mp, ff','pp, mp, mf, ff','pp, mf, mp, ff'],answer:'pp, mp, mf, ff'},
  {t:'match',prompt:'Match each articulation to its meaning.',pairs:[['staccato','short, detached'],['legato','smooth, joined'],['accent','stress the note'],['tenuto','held for full value']]},
  {t:'choice',prompt:'A loud, accented, staccato line sounds brighter and harder — the articulation has altered the…',options:['tempo','timbre / tone colour','metre'],answer:'timbre / tone colour'},
]},

{ id:'u8', name:'Timbre & Texture',
  guide:`<b>Families &amp; texture</b>
   <ul><li><b>How the sound is made</b> tells you the family: strings (bow/pluck), woodwind (reed/edge), brass (buzzed lips), percussion (struck/shaken).</li>
   <li><b>Voices high→low:</b> soprano, alto, tenor, bass.</li>
   <li><b>Changing the sound:</b> a mute softens/alters brass or strings; distortion is a gritty overdriven electric sound.</li>
   <li><b>Texture</b> = how many layers: monophonic (one line), homophonic (melody + accompaniment), polyphonic (two or more independent melodies).</li></ul>`,
  qs:[
  {t:'match',prompt:'Match each instrument to its family.',pairs:[['Violin','strings'],['Trumpet','brass'],['Clarinet','woodwind'],['Timpani','percussion'],['Double bass','strings']]},
  {t:'choice',prompt:'The four main voice types from high to low are…',options:['soprano, alto, tenor, bass','alto, soprano, bass, tenor','tenor, bass, soprano, alto'],answer:'soprano, alto, tenor, bass'},
  {t:'choice',prompt:'Brass players make their sound by…',options:['blowing across an edge','buzzing the lips in the mouthpiece','a reed'],answer:'buzzing the lips in the mouthpiece'},
  {t:'choice',prompt:'A device that softens or changes a brass or string timbre is a…',options:['mute','pedal','capo'],answer:'mute'},
  {t:'choice',prompt:'A gritty, overdriven electric-guitar sound is produced by…',options:['reverb','distortion','delay'],answer:'distortion'},
  {t:'match',prompt:'Match each texture to what you hear.',pairs:[['Monophonic','a single melodic line'],['Homophonic','melody + accompaniment'],['Polyphonic','two or more independent melodies']]},
  {t:'choice',prompt:'Two or more independent melodies sounding together is a…',options:['homophonic','polyphonic','monophonic'],answer:'polyphonic'},
]},
];
