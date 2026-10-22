// Reference tabs for Notate — Circle of Fifths (interactive) + other reference pages.
const COF = {
  // clockwise from top
  maj:['C','G','D','A','E','B','G♭ / F♯','D♭','A♭','E♭','B♭','F'],
  min:['Am','Em','Bm','F♯m','C♯m','G♯m','E♭m','B♭m','Fm','Cm','Gm','Dm'],
  n  :[0,1,2,3,4,5,6,5,4,3,2,1],
  fl :[false,false,false,false,false,false,true,true,true,true,true,true], // uses flats?
};
const SHARP_ORDER=['F','C','G','D','A','E','B'];
const FLAT_ORDER =['B','E','A','D','G','C','F'];
function keySig(i){
  const n=COF.n[i]; if(n===0) return 'No sharps or flats';
  if(COF.fl[i]) return n+' flat'+(n>1?'s':'')+': '+FLAT_ORDER.slice(0,n).map(x=>x+'♭').join(' ');
  return n+' sharp'+(n>1?'s':'')+': '+SHARP_ORDER.slice(0,n).map(x=>x+'♯').join(' ');
}
function polar(cx,cy,r,deg){const a=(deg-90)*Math.PI/180;return [cx+r*Math.cos(a),cy+r*Math.sin(a)];}
function wedge(cx,cy,ra,rb,a0,a1){
  const [x1,y1]=polar(cx,cy,rb,a0),[x2,y2]=polar(cx,cy,rb,a1),[x3,y3]=polar(cx,cy,ra,a1),[x4,y4]=polar(cx,cy,ra,a0);
  const laf=(a1-a0)>180?1:0;
  return `M${x1.toFixed(1)} ${y1.toFixed(1)} A${rb} ${rb} 0 ${laf} 1 ${x2.toFixed(1)} ${y2.toFixed(1)} L${x3.toFixed(1)} ${y3.toFixed(1)} A${ra} ${ra} 0 ${laf} 0 ${x4.toFixed(1)} ${y4.toFixed(1)} Z`;
}
function circleOfFifths(){
  const cx=300,cy=300,R=288,R2=196,R3=118;
  let s=`<svg viewBox="0 0 600 600" class="cof" xmlns="http://www.w3.org/2000/svg">`;
  for(let i=0;i<12;i++){
    const c=i*30-15, a0=c, a1=c+30, hue=i*30;
    const colM=`hsl(${hue} 62% 55%)`, colm=`hsl(${hue} 46% 44%)`;
    const [mx,my]=polar(cx,cy,(R+R2)/2, i*30);
    const [nx,ny]=polar(cx,cy,(R2+R3)/2, i*30);
    s+=`<path class="seg" data-i="${i}" d="${wedge(cx,cy,R2,R,a0,a1)}" fill="${colM}" stroke="#fff" stroke-width="2.5"/>`;
    s+=`<path class="seg" data-i="${i}" d="${wedge(cx,cy,R3,R2,a0,a1)}" fill="${colm}" stroke="#fff" stroke-width="2.5"/>`;
    s+=`<text x="${mx.toFixed(1)}" y="${(my+9).toFixed(1)}" text-anchor="middle" font-size="27" font-weight="800" fill="#fff" pointer-events="none">${COF.maj[i]}</text>`;
    s+=`<text x="${nx.toFixed(1)}" y="${(ny+6).toFixed(1)}" text-anchor="middle" font-size="17" font-weight="700" fill="#fff" pointer-events="none">${COF.min[i]}</text>`;
    const [sx,sy]=polar(cx,cy,R+16,i*30);
    s+=`<text x="${sx.toFixed(1)}" y="${(sy+4).toFixed(1)}" text-anchor="middle" font-size="12" font-weight="700" fill="#5b616a" pointer-events="none">${COF.n[i]===0?'':(COF.n[i]+(COF.fl[i]?'♭':'♯'))}</text>`;
  }
  s+=`<circle cx="${cx}" cy="${cy}" r="${R3-2}" fill="#141414"/>`;
  s+=`<text x="${cx}" y="${cy-8}" text-anchor="middle" font-size="19" font-weight="800" fill="#fff">Circle</text>`;
  s+=`<text x="${cx}" y="${cy+16}" text-anchor="middle" font-size="19" font-weight="800" fill="#fff">of 5ths</text>`;
  s+=`</svg>`;
  return s;
}
function refCircle(){
  return `<p class="prompt">Circle of Fifths</p>
   <p class="sub">Clockwise adds a sharp (a perfect 5th up); anticlockwise adds a flat (a 4th up). The outer ring is the major key, the inner ring its relative minor. Click any key.</p>
   <div class="cofwrap">${circleOfFifths()}</div>
   <div class="cofdetail" id="cofd">Tap a key to see its key signature and relative minor.</div>
   <div class="refnote"><b>Order of sharps:</b> F C G D A E B &nbsp;·&nbsp; <b>order of flats:</b> B E A D G C F (the reverse).</div>`;
}
function refKeys(){
  return `<p class="prompt">Scales &amp; Key Signatures</p>
   <div class="reftable"><table>
   <tr><th>Scale type</th><th>Pattern (T = tone, S = semitone)</th></tr>
   <tr><td>Major</td><td>T T S T T T S</td></tr>
   <tr><td>Natural minor</td><td>T S T T S T T</td></tr>
   <tr><td>Harmonic minor</td><td>T S T T S T½ S (raised 7th)</td></tr>
   </table></div>
   <div class="refcard"><b>Relative minor:</b> a minor 3rd (3 semitones) below the major, sharing its key signature. C↔Am, G↔Em, F↔Dm.</div>
   <div class="refcard"><b>Major-scale semitones</b> fall between degrees 3–4 and 7–8.</div>
   <div class="refcard"><b>Blues scale (minor pentatonic + ♭5):</b> 1 ♭3 4 ♭5 5 ♭7. A blues = A C D E♭ E G.</div>
   <div class="reftable"><table><tr><th>Sharp keys</th><th>Flat keys</th></tr>
   <tr><td>G(1) D(2) A(3) E(4) B(5) F♯(6)</td><td>F(1) B♭(2) E♭(3) A♭(4) D♭(5) G♭(6)</td></tr></table></div>`;
}
function refIntervals(){
  const rows=[['minor 2nd (m2)','1','C–D♭'],['major 2nd (M2)','2','C–D'],['minor 3rd (m3)','3','C–E♭'],
    ['major 3rd (M3)','4','C–E'],['perfect 4th (P4)','5','C–F'],['perfect 5th (P5)','7','C–G'],
    ['minor 6th (m6)','8','C–A♭'],['major 6th (M6)','9','C–A'],['minor 7th (m7)','10','C–B♭'],
    ['major 7th (M7)','11','C–B'],['perfect octave (P8)','12','C–C']];
  return `<p class="prompt">Intervals</p>
   <div class="refcard"><b>Number:</b> count letter names from lower to upper, <b>including both</b>. <b>Quality:</b> count the semitones.</div>
   <div class="reftable"><table><tr><th>Interval</th><th>Semitones</th><th>From C</th></tr>`
   +rows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')+`</table></div>
   <div class="refcard">2nds, 3rds, 6ths and 7ths are <b>major / minor</b>. 4ths, 5ths and octaves are <b>perfect</b>. A descending interval is measured downward from the top note.</div>`;
}
function refChords(){
  return `<p class="prompt">Chords &amp; Harmony</p>
   <div class="reftable"><table><tr><th>Triad</th><th>Built from the root</th><th>On C</th></tr>
   <tr><td>Major</td><td>major 3rd + minor 3rd</td><td>C E G</td></tr>
   <tr><td>Minor</td><td>minor 3rd + major 3rd</td><td>C E♭ G</td></tr></table></div>
   <div class="refcard"><b>Primary triads:</b> I, IV, V on degrees 1, 4 and 5. In C major: C, F, G.</div>
   <div class="refcard"><b>Minor key:</b> i and iv are minor; V is made <b>major</b> by the raised leading note. In A minor: Am, Dm, E.</div>
   <div class="refcard"><b>vi</b> is the minor chord on the 6th degree (C major → Am). Pop progression: I – V – vi – IV.</div>
   <div class="refcard"><b>Dominant 7th (V7):</b> the dominant triad + a minor 7th (four notes). In C major, V7 = G B D F. It pulls back to the tonic.</div>`;
}
function refTerms(){
  const dyn=[['pp','very soft'],['p','soft'],['mp','moderately soft'],['mf','moderately loud'],['f','loud'],['ff','very loud'],['sfz','a sudden strong accent'],['crescendo','gradually louder'],['decrescendo','gradually softer']];
  const art=[['staccato','short, detached'],['legato','smooth, joined'],['accent','stress the note'],['tenuto','held for full value']];
  const tmp=[['largo','very slow, broad'],['andante','walking pace'],['allegretto','fairly quick'],['allegro','fast, lively'],['rall. / rit.','gradually slower'],['accel.','gradually faster'],['a tempo','back to the original speed']];
  const tex=[['Monophonic','a single melodic line'],['Homophonic','melody + accompaniment'],['Polyphonic','two or more independent melodies']];
  const tbl=(t,rows)=>`<div class="refhd">${t}</div><div class="reftable"><table>`+rows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')+`</table></div>`;
  return `<p class="prompt">Expression &amp; Texture</p>`+tbl('Dynamics',dyn)+tbl('Articulation',art)+tbl('Tempo',tmp)+tbl('Texture',tex);
}
const REFS=[
  {id:'cof', name:'Circle of 5ths', render:refCircle},
  {id:'keys', name:'Keys & Scales', render:refKeys},
  {id:'ivl', name:'Intervals', render:refIntervals},
  {id:'chd', name:'Chords', render:refChords},
  {id:'term', name:'Terms', render:refTerms},
];
