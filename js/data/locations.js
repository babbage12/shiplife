const locations = [
    {
        id: 1,
        title: "Toledo, Ohio",
        coords: [41.6528, -83.5379],
        tag: "Chapter 1: Escape",
        icon: "🚪",
        iconType: "door",
        iconSymbol: "steel-door",
        isDoor: true,
        shortDesc: "The cubicle wanted spreadsheets. I wanted music.",
        imagePosition: "top",
        imageCaption: "Where it all started. Me and my dad's Jazzmaster.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">👥</span>
                    <span class="demo-value">265,638</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">NW Ohio</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏭</span>
                    <span class="demo-value">Glass City</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">📅</span>
                    <span class="demo-value">Est. 1833</span>
                </div>
            </div>
            
            <div class="story-section-panel">
                <h3 class="section-title-panel">The Doghouse</h3>
                <p>My mom would tell you the singing came before the talking.</p>
                <p>Finding me as a kid was easy - just listen. The sound of drums, clarinet, guitar, or singing would lead you right to me. My mom, my grandma, my brother and sister - anyone who would listen became an audience. My great-grandma Gillette would hoist me up onto the doghouse where the Star Spangled Banner would ring out, the apples on the surrounding trees standing in as my crowd.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/toledo/me_as_a_kid" class="story-image" data-caption="Uncomfortable." alt="Me as a kid">
                <p class="photo-caption-inline">Uncomfortable.</p>
                <p>Made-up songs. Harmonies with the radio. And the daydreaming - hours of it. Staring out classroom windows while the teacher's voice faded to background noise. None of it captured me. What captured me were the songs playing in my head, and imagining how far I could ride a horse into that field before the world ran out. Teachers didn't appreciate it. Report cards said things like 'needs to focus' and 'not working to potential.' My mom saw it differently. She bought me a book called <em>The Boy Who Marches to the Beat of a Different Drummer</em>. I remember that fondly.</p>
                <div class="story-break">· · ·</div>
                <p>My brother showed me the guitar for the first time. It lived under my parents' bed in a burgundy leather case - Mom's '61 Gibson SG. I wasn't supposed to touch it, but once I saw that red glow, I had to see it again. I'd sneak into their room, open those latches with great gravity, and just stare. I dreamed of holding it.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/toledo/sweater_kid" class="story-image" data-caption="Different drummer, different dress code." alt="Sweater across the back">
                <p class="photo-caption-inline">Different drummer, different dress code.</p>
                <p>A few years of begging and I was playing my dad's slightly more beat up Jazzmaster (still worth a fortune if you happen to own one today). By thirteen, I'd convinced Mom to let me have the Gibson too. So there I was, a teenager with two vintage guitars now worth more than most cars. And like everyone did back then, I sold them both.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/lespaujr_uhaklg" class="story-image" data-caption="My mom's '61 Gibson SG. I dreamed of holding it. Then I sold it." alt="1961 Gibson SG">
                <p class="photo-caption-inline">My mom's '61 Gibson SG. I dreamed of holding it. Then I sold it.</p>
                <p>By thirteen, I had joined my first band. We called ourselves 5th Avenue, and we played anywhere that would have us - including the Stony Ridge Fair, right in the small town where we grew up.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768520944/1000006615_kjgr2e.jpg" class="story-image" data-caption="Age 13. My first band, 5th Avenue, playing the Stony Ridge Fair." alt="5th Avenue at Stony Ridge Fair">
                <p class="photo-caption-inline">Age 13. My first band, 5th Avenue, playing the Stony Ridge Fair.</p>
                <p>A year or two later came an over-elaborate garage band project called Brothers of Badness. I remember us being pretty bad musically - but somehow we landed a high school prom gig in Cuyahoga Falls anyway.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768520945/1000006610_rzhkon.jpg" class="story-image" data-caption="Brothers of Badness. So we weren't exactly living up to our name... or were we?" alt="Brothers of Badness 1983">
                <p class="photo-caption-inline">Brothers of Badness. So we weren't exactly living up to our name... or were we?</p>
                <p>When music wasn't calling, the woods were. Hours spent walking the train tracks behind our house, so lost in thought that darkness would fall before the walk home. "Where have you been?" my exasperated mother would ask. Just wanted to see how far I could get before nightfall.</p>
                <p>Getting much further than the outskirts of that little town would have to wait a few years.</p>
            </div>
            
            <div class="story-section-panel">
                <h3 class="section-title-panel">Touched</h3>
                <p>1989 brought a band called Touched. We were hungry, and we were good. Through the early '90s we played high-end nightclubs and hotels, plus a few very questionable bars where certain death felt narrowly escaped more than once. The east coast was our circuit - Maine to Florida.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/toledo/touched_band" class="story-image" data-caption="Touched in one of its many forms, from left to right: Phil Berg, myself, Kevin Korecki, Robin Florey, Dave Gierke, and Kim Buhler." alt="The band Touched">
                <p class="photo-caption-inline">Touched in one of its many forms, from left to right: Phil Berg, myself, Kevin Korecki, Robin Florey, Dave Gierke, and Kim Buhler.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768520944/1000006613_as1tu6.jpg" class="story-image" data-caption="Touched at the 5 Seasons Hotel, Greensboro, NC. 1991." alt="Touched performing in Greensboro NC, 1991">
                <p class="photo-caption-inline">Touched at the 5 Seasons Hotel, Greensboro, NC. 1991.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The Double Life</span>
                <h3 class="section-title-panel">Fourteen Years</h3>
                <p>A few years in, the bills started piling up. A steady paycheck meant a day job. Customer service. Nothing glamorous, but it paid the rent.</p>
                <p>The thing is - the music never stopped. Touched was still gigging on nights and weekends, still playing around Toledo well into the 2000s. Music just... became the side hustle.</p>
                <p>At first, the day job felt like a reasonable compromise. Stay home, pay the bills, play music when possible. But one year became five. Five became ten. Life shrunk to the size of a cubicle - phone ringing constantly, inbox stacked two feet high and growing. Three bosses on one floor. Plus the guy in the cubicle out front who wasn't a boss but hadn't gotten the memo.</p>
                <p>After almost fourteen years of this, a hard realization hit:</p>
                <blockquote class="story-quote">This was a waste of time.</blockquote>
                <p>The day job wasn't supporting the music career. It was slowly replacing it. Time to get out.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The Spark</span>
                <h3 class="section-title-panel">Visualizing the Escape</h3>
                <p>In 2005, a few sets of guitar-vocal songs came together for my first solo gig in years. A good start, but there was still a ways to go. Escaping Toledo and making a real living playing music would require preparation.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767710239/vlcsnap-2026-01-06-08h32m21s251_aqec7t.png" class="story-image" data-caption="2005. The first solo gig in years. The spark." alt="First solo gig">
                <p class="photo-caption-inline">2005. The first solo gig in years. The spark.</p>
                <p>The most important step was visualizing where music could lead again. A scrapbook of exotic places took shape - images of grand hotels, cruise ships, distant stages.</p>
                <p>Then one late night, in a search for solo guitar gigs I landed on a British talent website with an ad that read something like:</p>
                <blockquote class="story-quote">Vocalist/Guitarist wanted for employment opportunity on cruise ship.</blockquote>
                <p>The application was filled out that same night. A few days later, sitting at my desk at work, an email appeared:</p>
                <blockquote class="story-quote">"I watched your video and we might have an opportunity for you in the very near future."</blockquote>
                <p>I left work early that day and was packing before the next day was over. Everything I had went into a storage unit, and Toledo - everything I had ever known - literally faded from view. Less than a month later, I was boarding a plane on my way to eventually Australia, where the next door was waiting to be opened.</p>
                <blockquote class="story-quote final-quote">The lock fell away from Chapter 1 and opened to the possibility of everything that came after.</blockquote>
            </div>
            
            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about this location</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🏛️</span>
                        <span>The Glass City</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Glass Capital:</strong> Toledo became the world's glass manufacturing hub when Edward Libbey moved his company here in 1888. The glass used in Apollo 11's mission was developed here.</li>
                        <li><strong>Jeep Heritage:</strong> The first Jeep was built in Toledo during WWII. The Wrangler and Gladiator are still made here today.</li>
                        <li><strong>Toledo War:</strong> In the 1830s, Ohio and Michigan nearly went to battle over Toledo. Michigan got the Upper Peninsula as a compromise.</li>
                        <li><strong>Tony Packo's:</strong> Made famous by Jamie Farr (Corporal Klinger) on M*A*S*H. Celebrities sign hot dog buns instead of guest books.</li>
                        <li><strong>Mud Hens:</strong> One of America's oldest minor league baseball teams (since 1896), also referenced on M*A*S*H.</li>
                    </ul>
                </div>
            </div>
            
            ${generateGallery('toledo')}
        `,
        fullDesc: "My mom would tell you the singing came before the talking. Finding me as a kid was easy - just listen.\n\nThe music never stopped. But after fourteen years of day jobs slowly replacing the dream, the realization hit: this was a waste of time.\n\nThis was Chapter 1. The escape. This chapter opened the possibility of everything that came after.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/9_yr_jazzmaster_square_r8uajm"
    },
    {
        id: 21,
        title: "Brisbane, Australia",
        coords: [-27.4705, 153.0260],
        tag: "First Shore Leave",
        icon: "☀️",
        isDoor: false,
        shortDesc: "First shore leave. The door stayed open.",
        useRichContent: true,
        richContent: `
            <p>Brisbane was the first real port of call after leaving Auckland. The previous two nights had been spent performing in the same club where the previous soloist lasted exactly two days. The warning before boarding was clear: this is just how it was - don't be shocked if things don't work out.</p>
            <p>Mentally prepared for a call from the cruise director's office saying "Thanks, but no thanks" along with a plane ticket home.</p>
            <p>It was an anxious morning. Breakfast with a few random crewmates, thinking about my boss back home who said the phone job would still be there if things didn't work out.</p>
            <p>But eventually the crew was let off the ship. Myself included.</p>
            <p>First shore leave.</p>
            <p>Turns out, this was the first of many shore leaves over the next 12 years.</p>
            <p>The door stayed open.</p>

            ${generateGallery('brisbane')}
        `,
        fullDesc: "Brisbane was the first real port of call after leaving Auckland. The previous two nights had been spent performing in the same club where the previous soloist lasted exactly two days. The warning before boarding was clear: this is just how it was - don't be shocked if things don't work out.\n\nMentally prepared for a call from the cruise director's office saying \"Thanks, but no thanks\" along with a plane ticket home.\n\nIt was an anxious morning. Breakfast with a few random crewmates, thinking about my boss back home who said the phone job would still be there if things didn't work out.\n\nBut eventually the crew was let off the ship. Myself included.\n\nFirst shore leave.\n\nTurns out, this was the first of many shore leaves over the next 12 years.\n\nThe door stayed open.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769816317/brisbane_iajcgd.jpg"
    },
    {
        id: 22,
        title: "Darwin, Australia",
        coords: [-12.4634, 130.8456],
        tag: "Chapter 2: My First Contract",
        icon: "🚪",
        isDoor: true,
        shortDesc: "Making it to Darwin meant making it anywhere.",
        imagePosition: "center",
        imageCaption: "Somewhere in the first week - still figuring out the rhythm.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">👥</span>
                    <span class="demo-value">~150,000</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🌏</span>
                    <span class="demo-value">60+ Nationalities</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🎂</span>
                    <span class="demo-value">Youngest Capital</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">Northern Territory</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Orientation Day</span>
                <h3 class="section-title-panel">A Life in Motion</h3>
                <p>On the first day aboard, during orientation, the staff captain told us straight:</p>
                <blockquote class="story-quote">
                    "Ship life will fulfill you, drain you, or wreck you emotionally. You can tell a lot about a person based on how they conduct themselves aboard a ship."
                    <cite>- Staff Captain, Pacific Sun</cite>
                </blockquote>
                <p>Sitting there, the question hung in the air: am I ready for this? Ready to become the best version of myself? Because that's what this was going to take.</p>
                <p>Those first weeks were a blur. Learning the sets, the venues, the politics of ship entertainment. Learning the rhythm of a life in motion. You wake up in one country. Perform in another. Sleep somewhere in between.</p>
                <div style="text-align: center; margin: 1.25rem 0;">
                    <span class="directors-commentary darwin-captain" style="margin-left: 0;">
                        <span class="commentary-trigger" onclick="openCommentaryModal()" title="A Quick Story...">
                            <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768678993/ComfyUI_01292__jp0pvj.png" alt="Captain">
                        </span>
                        <svg class="click-me-text" viewBox="0 0 100 100">
                            <defs>
                                <path id="darwinCirclePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"/>
                            </defs>
                            <text>
                                <textPath href="#darwinCirclePath" startOffset="0%">CLICK ME • CLICK ME •</textPath>
                            </text>
                        </svg>
                    </span>
                </div>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768526570/IMG_0109_dvahoj.jpg" class="story-image" data-caption="Pacific Sun docked in New Caledonia." alt="Pacific Sun in New Caledonia">
                <p class="photo-caption-inline">Pacific Sun docked in New Caledonia.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Proving Ground</span>
                <h3 class="section-title-panel">The 14-Day Cruise</h3>
                <p>Two weeks. Two 7-day cruises. That was the industry standard - the unspoken trial period where the office watched to see if the new soloist would sink or swim. Past that 2-week window was a 14-day cruise to Darwin.</p>
                <p>Making it past that window meant the home office would turn their attention to more pressing matters. You were left alone to succeed, fail, or burn out at your own pace.</p>
                <p>Crew members whispered about the 14-day cruise to Darwin like it was a mystical place. Everyone was excited about an overnight stay. But Darwin represented something else entirely.</p>
                <p>Staying on and making it to Darwin without being handed a free meal and a plane ticket home meant at least a full 4-month contract. I was already getting into the rhythm of this very different life, and I was enjoying it. I didn't want to leave any time soon.</p>
                <blockquote class="story-quote">Making it to Darwin meant making it anywhere.</blockquote>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767645531/002_zzrowo.jpg" class="story-image" data-caption="Smugglers Lounge on the Pacific Sun - the proving ground." alt="Smugglers Lounge">
                <p class="photo-caption-inline">Smugglers Lounge on the Pacific Sun - the proving ground.</p>
                <p>Darwin marked the end of my probation. Five weeks into a four-month contract, we pulled into port and I realized something had shifted. The constant vigilance from management had eased. My name appeared in the daily entertainment schedule without revision.</p>
                <blockquote class="story-quote">Pre Show Entertainment with the acoustic sounds of our Solo Guitarist - Derrick Hudson. Show Times: 7:30PM & 9:30PM.</blockquote>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767645530/atlantis_brochure_kmknn5.jpg" class="story-image" data-caption="The Atlantis entertainment brochure - my name in print." alt="Atlantis entertainment brochure">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767645531/577727_2891241418592_422943946_n_ffy5nv.jpg" class="story-image" data-caption="Soundcheck at the Atlantis Lounge before the doors opened." alt="Soundcheck at the Atlantis Lounge">
                </div>
                <p class="photo-caption-inline">The Atlantis Showlounge - my name in print, and the view from soundcheck before the doors opened.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">Shore Leave</span>
                <h3 class="section-title-panel">The Pacific Run</h3>
                <p>The Pacific run took us through places previously only seen in documentaries. Turquoise water so clear you could count fish from the tender. Churches older than any building back home. Islands where time moved differently.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768526487/Isle_of_Pines_tddsqy.jpg" class="story-image" data-caption="Isle of Pines, New Caledonia." alt="Isle of Pines">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768526493/134_cwcuy0.jpg" class="story-image" data-caption="Pool party in Bali." alt="Pool party in Bali">
                </div>
                <p class="photo-caption-inline">Isle of Pines, New Caledonia. Pool party in Bali.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768526496/bora_bora_z03zsr.jpg" class="story-image" data-caption="Bora Bora, French Polynesia." alt="Bora Bora">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768527359/DSC00357_et8mzd.jpg" class="story-image" data-caption="Semarang temple, Indonesia." alt="Semarang temple">
                </div>
                <p class="photo-caption-inline">Bora Bora, French Polynesia. Semarang temple, Indonesia.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767645531/darwin_star_jseq6c.jpg" class="story-image" data-caption="The Star Picture Theatre in Darwin." alt="Darwin Star Picture Theatre">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767645531/DSC00286_ikuq8x.jpg" class="story-image" data-caption="Brisbane lit up at night." alt="Brisbane at night">
                </div>
                <p class="photo-caption-inline">The Star Picture Theatre in Darwin, and Brisbane lit up at night.</p>
            </div>

            <details class="collapsible-gallery">
                <summary>That Time We Were Almost Eaten by Crocodiles</summary>
                <div class="gallery-story-section">
                    <p>A few hours from Darwin lies Litchfield National Park - waterfalls, swimming holes, and prehistoric-looking termite mounds. A group of us rented a van and drove out there. We found a beautiful swimming hole and jumped right in. Crystal clear water, surrounded by jungle. Paradise.</p>
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768532403/033_tbuodb.jpg" class="gallery-story-image" data-caption="Swimming in Litchfield. We saw the crocodile warning sign on our way out." alt="Litchfield National Park swimming hole">
                    <p>It wasn't until we were leaving that we noticed the sign: <strong>"CROCODILES INHABIT THIS AREA."</strong> We'd been splashing around for an hour.</p>
                    <div class="story-gallery-grid">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/litchfield/031.jpg" class="story-image" data-caption="Litchfield" alt="Litchfield">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/litchfield/039.jpg" class="story-image" data-caption="Litchfield waterfalls" alt="Litchfield">
                    </div>
                    <div class="story-gallery-grid">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/litchfield/040.jpg" class="story-image" data-caption="Litchfield" alt="Litchfield">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/litchfield/049.jpg" class="story-image" data-caption="Litchfield swimming hole" alt="Litchfield">
                    </div>
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/litchfield/053.jpg" class="story-image" data-caption="The crocodile-infested waters we were swimming in" alt="Litchfield">
                </div>
            </details>

            <div class="story-section-panel">
                <span class="section-tag-panel">Shipmates</span>
                <h3 class="section-title-panel">Witnesses to the Strange</h3>
                <p>They weren't just colleagues. They were professionals, equally dedicated to their craft. But more than that, we were all witnesses to this strange experience we'd signed on to.</p>
                <p>There was humor and irony in every story told at sea. It just happened that way - so many people from such different places, bumping into each other's unfamiliar ways.</p>
                <p>Some of the best nights were when the stage was shared. My good friend Hayden Smith would jump in at Smugglers Lounge and the Atlantis Lounge. Lars too. Those were the gigs that reminded everyone why we were here.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768530243/Screen_Shot_2026-01-15_at_9.24.29_PM_tlievd.png" class="story-image" data-caption="Goofing off in crew bar with shipmates." alt="Goofing off in crew bar">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768528418/crew_bar_urzrll.jpg" class="story-image" data-caption="Goofing off in crew bar with shipmates." alt="Goofing off in crew bar">
                </div>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768528676/Screen_Shot_2026-01-15_at_8.58.48_PM_gtsbkw.png" class="story-image" data-caption="Goofing off in crew bar with shipmates." alt="Goofing off in crew bar">
                <p class="photo-caption-inline">Goofing off in crew bar with shipmates.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768528859/Screen_Shot_2026-01-15_at_9.01.50_PM_buvpyi.png" class="story-image" data-caption="Playing with my friend Hayden Smith in Smugglers Lounge." alt="Playing with Hayden Smith">
                <p class="photo-caption-inline">Playing with my friend Hayden Smith in Smugglers Lounge.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768528813/Screen_Shot_2026-01-15_at_9.00.59_PM_i6usqj.png" class="story-image" data-caption="Hayden and I performing in Atlantis Lounge." alt="Hayden and I in Atlantis">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768528773/Screen_Shot_2026-01-15_at_9.00.21_PM_ood4z7.png" class="story-image" data-caption="Hayden and I performing in Atlantis Lounge." alt="Hayden and I in Atlantis">
                </div>
                <p class="photo-caption-inline">Hayden and I performing in Atlantis Lounge.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768528580/Screen_Shot_2026-01-15_at_8.57.09_PM_eibhfs.png" class="story-image" data-caption="Playing with my friend Lars in Smugglers Lounge." alt="Playing with Lars">
                <p class="photo-caption-inline">Playing with my friend Lars in Smugglers Lounge.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768531847/008-3_zkgv14.jpg" class="story-image" data-caption="Aussie passengers know how to party." alt="Aussie passengers know how to party">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768531863/011-6_t1i6uf.jpg" class="story-image" data-caption="Aussie passengers know how to party." alt="Aussie passengers know how to party">
                </div>
                <p class="photo-caption-inline">Aussie passengers know how to party.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Ship Celebrity</span>
                <h3 class="section-title-panel">Cruise Director's Corner</h3>
                <p>One day the cruise director extended an invitation to his daily TV show - broadcast to every cabin on the ship. Sat down, feeling pretty good about myself.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768530105/Screen_Shot_2026-01-15_at_9.20.01_PM_yujfq8.png" class="story-image" data-caption="Cruise Director's Corner. Cool, calm, collected." alt="TV show relaxed">
                <p class="photo-caption-inline">Cool. Calm. Collected.</p>
                <p>Then the realization hit: 2,000 passengers were watching live. And suddenly, how humans sit became a complete mystery.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768530034/Screen_Shot_2026-01-15_at_9.21.22_PM_kazerc.png" class="story-image" data-caption="Cruise Director's Corner. Where do hands go? What are hands? Why do I have hands?" alt="TV show nervous">
                <p class="photo-caption-inline">Where do hands go? What are hands? Why do I have hands?</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Chapter 2</span>
                <h3 class="section-title-panel">The Chapter That Opened Everything</h3>
                <p>Darwin was the chapter that opened onto my future as a cruise ship musician. The following Chapter 3 opened to a world I honestly couldn't have imagined, no matter how big a daydreamer I had been as a kid.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about this location</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🦘</span>
                        <span>Australia's Top End</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Named After Darwin:</strong> The city was named after Charles Darwin, who sailed into the harbor aboard HMS Beagle in 1839.</li>
                        <li><strong>WWII Bombing:</strong> Darwin was bombed 64 times during WWII - more than Pearl Harbor. The first attack killed 235 people.</li>
                        <li><strong>Beer Can Regatta:</strong> Every year Darwin hosts a regatta where boats must be made entirely of beer cans. Very Darwin.</li>
                        <li><strong>Closer to Bali:</strong> Darwin is closer to Bali, Indonesia than it is to Sydney. It's Australia's gateway to Asia.</li>
                        <li><strong>Youngest Capital:</strong> With a median age of 34.6, Darwin is Australia's youngest capital city.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('darwin', 'More Photos of Shiplife')}
        `,
        fullDesc: "Crew members whispered about the 14-day cruise to Darwin like it was a mystical place. But Darwin represented something else entirely: making it there meant staying onboard for a full contract.\n\nDarwin was the chapter that opened onto the future. From there, it was only a matter of time before the entire world opened up.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767643122/013_pzswfa.jpg"
    },
    {
        id: 4,
        title: "Auckland, New Zealand",
        coords: [-36.8509, 174.7645],
        tag: "Chapter 3: Full Circle",
        icon: "🚪",
        isDoor: true,
        shortDesc: "2013: Joining the ship I once only dreamed about.",
        imagePosition: "center",
        imageCaption: "Seabourn Quest in Antarctica.",
        useRichContent: true,
        richContent: `
            <div class="story-section-panel">
                <span class="section-tag-panel">A Brief Digression</span>
                <h3 class="section-title-panel">Before We Continue...</h3>
                <p>Before we go any further into the story, a brief digression.</p>
                <p>We need to go back to 2009 - the first ship contract.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">Seeing My Future</span>
                <h3 class="section-title-panel">Cairns, 2009</h3>
                <p>Riding bikes with shipmates. A white ship in the harbor.</p>
                <p>Someone said, "That's Seabourn. Top cruise line in the world."</p>
                <p>Watched it for a while. Got a little closer and snapped a photo.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767729026/IMG_0220_r8svvx.jpg" class="story-image" alt="Seabourn Odyssey in Cairns">
                <p class="photo-caption-inline">The Seabourn Odyssey in Cairns. Working on the Pacific Sun, already dreaming about this strange, elegant ship.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel section-tag-glow">Three Fun-Filled, Island-Hopping Years Later...</span>
                <h3 class="section-title-panel">Akaroa, New Zealand. November 2012.</h3>
                <p>A note slipped under my door.</p>
                <blockquote class="story-quote">Please contact your agent when ashore.</blockquote>
                <p>The call was made standing on the dock. C. Blackburn - the same agent who landed me that first ship - delivered the news.</p>
                <p>Seabourn wanted a soloist. The number one rated small cruise ship in the world. The same ship seen in Cairns three years earlier!</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767729047/IMG_0830_pv7td9.jpg" class="story-image" alt="Akaroa Harbor">
                <p class="photo-caption-inline">Akaroa Harbor. The moment everything changed.</p>
                <p>An hour later I was eating oysters with my shipmates. Gagging. Laughing. Trying not to throw up.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767729046/IMG_0831_ei47kw.jpg" class="story-image" alt="Oysters in Akaroa">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768532532/IMG_0833_dul2vl.jpg" class="story-image" alt="Eating oysters">
                </div>
                <p class="photo-caption-inline">Oysters with shipmates. Not my finest moment.</p>
                <p>The door had just slid open.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The Rest of It</span>
                <h3 class="section-title-panel">A Different Universe</h3>
                <p>The first two doors I had to push open myself.</p>
                <p>This one just... opened.</p>
                <p>P&O gave me the Pacific. Four years of Australia, New Zealand, Fiji, Tahiti, Papua New Guinea. The whole world, it seemed.</p>
                <blockquote class="story-quote">Seabourn gave me the rest of it.</blockquote>
                <p>Three vessels. Four years. Odyssey. Sojourn. Quest. 60+ countries.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">Embarkation</span>
                <h3 class="section-title-panel">Auckland, January 2013</h3>
                <p>Same port where I boarded my first P&O ship in 2009.</p>
                <p>Same gangway. Different universe.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767727288/IMG_0145_v2vqtm.jpg" class="story-image" alt="Sky Tower Auckland">
                <p class="photo-caption-inline">The Sky Tower - Auckland's needle. Watching over the harbor as I sailed in on a new ship.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767732747/IMG_0159_nx39vl.jpg" class="story-image" alt="Auckland Harbor from Seabourn">
                <p class="photo-caption-inline">Auckland Harbor from the Odyssey. Pulling away from where it all started.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767729034/IMG_0169_nnzkhu.jpg" class="story-image" alt="Leaving Auckland">
                <p class="photo-caption-inline">Sky Tower fading behind us. A new chapter beginning.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The Seabourn Experience</span>
                <h3 class="section-title-panel">Not Your Average Cruise Ship</h3>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769827243/seabourn_in_marseille_w6uyqy.jpg" class="story-image" alt="Seabourn in Marseille">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769827154/seabourn_in_amalfi_zxkxez.jpg" class="story-image" alt="Seabourn in Amalfi">
                </div>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769825370/seabourn_goes_anywhere_it_wants_rlcqhm.jpg" class="story-image" alt="Seabourn goes anywhere">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769825251/oddyssy_in_malta_ozbqnz.jpg" class="story-image" alt="Seabourn Odyssey in Malta">
                </div>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769825070/seabourn_sezzq5.jpg" class="story-image" alt="Seabourn ship">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769824723/sojourn_2_jajz31.jpg" class="story-image" alt="Seabourn Sojourn">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769823772/seabourn_naynld.jpg" class="story-image" alt="Seabourn ship">
                </div>
                <p class="photo-caption-inline">Seabourn ships go places bigger ships can only dream of. Marseille. Amalfi. Malta. Tucked into harbors and anchored off coastlines that mass-market cruise lines will never see.</p>
                <p>Seabourn ships are more like huge luxury yachts than cruise ships. The guests were amazing. Doctors. Lawyers. Dignitaries. CEOs. Experts in horticulture, ancient history, penguins - you name it.</p>
                <p>And the crew knew how to party.</p>
                <p>Everyone was friendly. Everyone was professional.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767733813/IMG_0218_azftb2.jpg" class="story-image" alt="The Club">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767727964/Screen_Shot_2026-01-06_at_2.33.27_PM_v6kw7e.png" class="story-image" alt="Derrick at the piano">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768532493/IMG_0227_psvuop.jpg" class="story-image" alt="Performing on Seabourn">
                </div>
                <p class="photo-caption-inline">The Club on Deck 5 - my stage. And yes, they always put me by the food.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">Chapter 3</span>
                <h3 class="section-title-panel">The Entire Globe</h3>
                <p>Chapter 3 opened to the entire world.</p>
                <p>Back in that little yellow house in Toledo, a dream had been conjured into reality through sheer force of will.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The World</span>
                <h3 class="section-title-panel">Seabourn Gave Me the Rest of It</h3>
                <div class="world-carousel" id="worldCarousel">
                    <div class="carousel-slide active">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767734543/IMG_3093_p55z1r.jpg" alt="Milos, Greece">
                        <div class="carousel-caption"><span>Milos, Greece</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767737978/IMG_6712_bmwcxi.jpg" alt="Lemaire Channel, Antarctica">
                        <div class="carousel-caption"><span>Lemaire Channel, Antarctica</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767739780/IMG_6538_tolutk.jpg" alt="Antarctica">
                        <div class="carousel-caption"><span>Antarctica</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767738529/IMG_5536_ipjhwy.jpg" alt="St. Tropez">
                        <div class="carousel-caption"><span>St. Tropez</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767736180/IMG_0914_u5kskn.jpg" alt="Mumbai">
                        <div class="carousel-caption"><span>Mumbai</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767735553/IMG_1717_ggcmyu.jpg" alt="Kotor, Montenegro">
                        <div class="carousel-caption"><span>Kotor, Montenegro</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767737741/IMG_6834_ytmj8n.jpg" alt="South Georgia">
                        <div class="carousel-caption"><span>South Georgia</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767738680/IMG_20140610_113551_fvskrb.jpg" alt="Ibiza, Spain">
                        <div class="carousel-caption"><span>Ibiza, Spain</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767735952/IMG_0854_wmukmp.jpg" alt="Tel Aviv">
                        <div class="carousel-caption"><span>Tel Aviv</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767736004/IMG_0687_znjvkv.jpg" alt="Egypt">
                        <div class="carousel-caption"><span>Egypt</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767738205/IMG_6691_g9fekn.jpg" alt="Ushuaia, Argentina">
                        <div class="carousel-caption"><span>Ushuaia, Argentina</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767734745/IMG_1778_fw5ihj.jpg" alt="Piran, Slovenia">
                        <div class="carousel-caption"><span>Piran, Slovenia</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767738333/IMG_5961_m85dyt.jpg" alt="Salem, Massachusetts">
                        <div class="carousel-caption"><span>Salem, Massachusetts</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767735863/IMG_1155_qtda7b.jpg" alt="Malta">
                        <div class="carousel-caption"><span>Malta</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767738440/IMG_20140811_122138_cqwjid.jpg" alt="Barcelona, Spain">
                        <div class="carousel-caption"><span>Barcelona, Spain</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767735639/IMG_1240_swdpx7.jpg" alt="Syracuse, Sicily">
                        <div class="carousel-caption"><span>Syracuse, Sicily</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768587596/IMG_1656_afip0q.jpg" alt="Seabourn Odyssey in Kotor, Montenegro">
                        <div class="carousel-caption"><span>Seabourn Odyssey in Kotor, Montenegro</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768587199/IMG_3004_uyulft.jpg" alt="Seabourn Odyssey in Nafplion, Greece">
                        <div class="carousel-caption"><span>Seabourn Odyssey in Nafplion, Greece</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768587674/IMG_1278_urf1yi.jpg" alt="Seabourn Sojourn in Itea, Greece">
                        <div class="carousel-caption"><span>Seabourn Sojourn in Itea, Greece</span></div>
                    </div>
                    <div class="carousel-dots"></div>
                </div>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about this location</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">⛵</span>
                        <span>City of Sails</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Sky Tower:</strong> At 328m, it's the tallest freestanding structure in the Southern Hemisphere. You can bungee jump off it or walk around the outside edge.</li>
                        <li><strong>City of Sails:</strong> Auckland has more boats per capita than any other city in the world - about one boat for every four people.</li>
                        <li><strong>Volcanic Field:</strong> The city is built on a field of about 50 volcanoes. Rangitoto, the youngest, last erupted just 600 years ago.</li>
                        <li><strong>Polynesian Hub:</strong> Auckland has the largest Polynesian population of any city in the world, making it the de facto capital of the Pacific Islands.</li>
                        <li><strong>Two Harbors:</strong> The only major city in the world with two harbors on separate bodies of water - Waitematā and Manukau.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('auckland')}
        `,
        fullDesc: "The first two doors had to be pushed open. This one just... opened.\n\nP&O gave me the Pacific. Four years of Australia, New Zealand, Fiji, Tahiti, Papua New Guinea. The whole world, it seemed.\n\nSeabourn gave me the rest of it.\n\nThree vessels. Four years. Odyssey. Sojourn. Quest. 60+ countries.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768586585/IMG_6563_ggigfv.jpg"
    },
    {
        id: 2,
        title: "Reithi Rah, Maldives",
        coords: [4.2925, 73.3670],
        tag: "Shark-Infested Paradise",
        icon: "🦈",
        isDoor: false,
        tag: "🎵 Original Song",
        useRichContent: true,
        richContent: `
        <div class="song-panel">
            <div class="song-status">
                <span class="status-label">Original Song</span>
                <span class="status-text">Coming Soon</span>
            </div>

            <div class="story-section-panel">
                <h3>Reserved for Music</h3>
                <p>This location has been set aside for an original song. The music is being written as a tribute to this place and the memories it holds.</p>
                <p><strong>Mood:</strong> Peaceful / Dreamy</p>
                <p><strong>Theme:</strong> Paradise found, simplicity, floating on water</p>
            </div>

            <div class="lyrics-section" onclick="this.classList.toggle('expanded')">
                <div class="lyrics-header">
                    <span class="lyrics-title">
                        <span class="lyrics-icon">📝</span>
                        <span>Lyrics</span>
                    </span>
                    <span class="lyrics-toggle">▼</span>
                </div>
                <div class="lyrics-content">
                    <div class="lyrics-text">
<span class="verse-label">Coming Soon</span>

Lyrics will appear here when the song is complete.

This space is reserved for "Reithi Rah, Maldives" -
an original composition inspired by this place.
                    </div>
                </div>
            </div>

            <div class="audio-player-container">
                <p style="text-align: center; font-size: 0.85rem; color: rgba(245,240,232,0.6); margin: 0;">
                    🎵 Audio player will appear when song is released
                </p>
            </div>
        </div>`,
        fullDesc: "Ah...the Maldives. A shark-infested paradise.\n\nDaily walks through dense tropical forest. One day, the largest man I'd seen in my life came running towards me on the narrow path-one of the oligarchs' bodyguards. They were here for Christmas, and the island was flooded with them.\n\nReef sharks by the restaurant door. Millions bet on beach card games. At some point I had to stop myself from saying wow all the time.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767729034/IMG_0038_cbv7ss.jpg"
    },
    {
        id: 3,
        title: "Queen Victoria (Cunard)",
        coords: [50.90, -1.40],
        tag: "Luxury & Grandeur",
        icon: "👑",
        isDoor: false,
        tag: "🎵 Original Song",
        useRichContent: true,
        richContent: `
        <div class="song-panel">
            <div class="song-status">
                <span class="status-label">Original Song</span>
                <span class="status-text">Coming Soon</span>
            </div>

            <div class="story-section-panel">
                <h3>Reserved for Music</h3>
                <p>This location has been set aside for an original song. The music is being written as a tribute to this place and the memories it holds.</p>
                <p><strong>Mood:</strong> Elegant / Nostalgic</p>
                <p><strong>Theme:</strong> Grand ocean liners, old world glamour, a life at sea</p>
            </div>

            <div class="lyrics-section" onclick="this.classList.toggle('expanded')">
                <div class="lyrics-header">
                    <span class="lyrics-title">
                        <span class="lyrics-icon">📝</span>
                        <span>Lyrics</span>
                    </span>
                    <span class="lyrics-toggle">▼</span>
                </div>
                <div class="lyrics-content">
                    <div class="lyrics-text">
<span class="verse-label">Coming Soon</span>

Lyrics will appear here when the song is complete.

This space is reserved for "Queen Victoria (Cunard)" -
an original composition inspired by this place.
                    </div>
                </div>
            </div>

            <div class="audio-player-container">
                <p style="text-align: center; font-size: 0.85rem; color: rgba(245,240,232,0.6); margin: 0;">
                    🎵 Audio player will appear when song is released
                </p>
            </div>
        </div>`,
        fullDesc: "In 2019, a prestigious position opened up on the iconic Queen Victoria.\n\nThe Queen's Room was unlike anything experienced before. A grand ballroom where couples would waltz beneath crystal chandeliers while a nine-piece orchestra played.\n\nThis was old-world elegance at sea - white gloves, formal attire, and the kind of sophistication that harked back to the golden age of ocean travel.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769821450/queen_v_wsuwn6.jpg"
    },
    {
        id: 116,
        title: "Amsterdam, Netherlands",
        coords: [52.38, 4.90],
        tag: "Canals & Culture",
        icon: "🚲",
        isDoor: false,
        tag: "🎵 Original Song",
        useRichContent: true,
        richContent: `
        <div class="song-panel">
            <div class="song-status">
                <span class="status-label">Original Song</span>
                <span class="status-text">Coming Soon</span>
            </div>

            <div class="story-section-panel">
                <h3>Reserved for Music</h3>
                <p>This location has been set aside for an original song. The music is being written as a tribute to this place and the memories it holds.</p>
                <p><strong>Mood:</strong> Reflective / Bittersweet</p>
                <p><strong>Theme:</strong> Canal reflections, bicycles, rain on cobblestones</p>
            </div>

            <div class="lyrics-section" onclick="this.classList.toggle('expanded')">
                <div class="lyrics-header">
                    <span class="lyrics-title">
                        <span class="lyrics-icon">📝</span>
                        <span>Lyrics</span>
                    </span>
                    <span class="lyrics-toggle">▼</span>
                </div>
                <div class="lyrics-content">
                    <div class="lyrics-text">
<span class="verse-label">Coming Soon</span>

Lyrics will appear here when the song is complete.

This space is reserved for "Amsterdam, Netherlands" -
an original composition inspired by this place.
                    </div>
                </div>
            </div>

            <div class="audio-player-container">
                <p style="text-align: center; font-size: 0.85rem; color: rgba(245,240,232,0.6); margin: 0;">
                    🎵 Audio player will appear when song is released
                </p>
            </div>
        </div>`,
        fullDesc: "Amsterdam is a city that flows.\n\nThe canals wind through centuries of history-gabled houses leaning into each other, houseboats lined up along the banks, bicycles everywhere. The museums are world-class, the brown cafés are cozy, and the city has a tolerance and openness that's refreshing.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769520695/DSCN0153_xibhy6.jpg"
    },
    {
        id: 5,
        title: "Dubrovnik, Croatia",
        coords: [42.6507, 18.0944],
        tag: "Time Travel",
        icon: "🏰",
        isDoor: false,
        shortDesc: "Stepping through ancient gates into the Middle Ages.",
        imagePosition: "center",
        imageCaption: "The walled city of Dubrovnik from above.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">🏰</span>
                    <span class="demo-value">Walled City</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🚢</span>
                    <span class="demo-value">Multiple Visits</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🛵</span>
                    <span class="demo-value">Scooter Adventures</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">📖</span>
                    <span class="demo-value">The Tin Soldier</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Arrival</span>
                <h3 class="section-title-panel">The Walk</h3>
                <p>Sometimes the ship would tender, other times it would dock in the new city. Either way, the anticipation was the same. I would walk from the new city to the old, a few miles along the coast.</p>
                <p>Looking back, I snapped this picture behind me.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1770163382/IMG_2049.jpg" class="story-image" data-caption="Looking back toward the new city." alt="Looking back toward the new city">
                <p>And to the right of me, down the hill.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1770084065/IMG_2074.jpg" class="story-image" data-caption="Down the hill toward the walled city." alt="Down the hill toward the walled city">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1770083976/IMG_2073.jpg" class="story-image" data-caption="Coffee and a guide to the city." alt="Coffee and a guide to the city">
                <p>I stopped for a cup of coffee and bought a guide to the city. And spent the next day and night immersed in the ancient sights and sounds of Dubrovnik.</p>

                <div class="story-carousel">
                    <div class="carousel-slide active">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1770084166/IMG_2090.jpg" alt="Inside the walled city">
                        <div class="carousel-caption"><span>Inside the walled city</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1770080877/IMG_2738.jpg" alt="Walking through the old city">
                        <div class="carousel-caption"><span>Walking through the old city</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1770080876/IMG_2739.jpg" alt="Dubrovnik streets">
                        <div class="carousel-caption"><span>The ancient streets</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1770080875/IMG_2744.jpg" alt="Dubrovnik architecture">
                        <div class="carousel-caption"><span>Centuries of architecture</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1770080865/IMG_2757.jpg" alt="Dubrovnik scenery">
                        <div class="carousel-caption"><span>Around every corner</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1770080863/IMG_2762.jpg" alt="Views from the old city">
                        <div class="carousel-caption"><span>Views from the old city</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1770149006/IMG_2123.jpg" alt="The old harbor">
                        <div class="carousel-caption"><span>The old harbor</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1770148994/IMG_2137.jpg" alt="The bastions">
                        <div class="carousel-caption"><span>The bastions along the city walls</span></div>
                    </div>
                    <div class="carousel-dots"></div>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Old City</span>
                <h3 class="section-title-panel">Through the Gates</h3>
                <p>We had already seen a lot of ruins and ancient cities on our trip up the Adriatic. However, nothing prepared me for walking through those gates and being transported back into the Middle Ages.</p>
                <blockquote class="story-quote">It wasn't just the architecture - it was the feeling. As if centuries collapsed the moment you stepped through that stone archway.</blockquote>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1770080875/IMG_2749.jpg" class="story-image" data-caption="Dubrovnik old town." alt="Dubrovnik old town">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1770149005/IMG_2120.jpg" class="story-image" data-caption="Cannons still guarding the walls." alt="Cannons on the city walls">
                </div>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1770148991/IMG_2142.jpg" class="story-image" data-caption="Boats in the old harbor." alt="Boats in Dubrovnik harbor">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1770148990/IMG_2148.jpg" class="story-image" data-caption="Dubrovnik harbor boats." alt="Harbor boats">
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Adventures</span>
                <h3 class="section-title-panel">A Thousand Ways to Travel</h3>
                <p>There were many ways to travel far in one day around the Med, and the crew knew all of the secrets. Bus stops, train routes, scooter rentals, ocean kayaking - cheat sheets were always being passed around. Short of skydiving, I think I tried the rest.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1770083064/Screen_Shot_2026-02-02_at_8.40.38_PM.jpg" class="story-image" data-caption="Ocean kayaking around the city walls." alt="Ocean kayaking in Dubrovnik">
                <p class="photo-caption-inline">Ocean kayaking around the city walls.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Dream</span>
                <h3 class="section-title-panel">The Steadfast Tin Soldier</h3>
                <p>At some point it occurred to me. As a kid I'd read Hans Christian Andersen's <em>The Steadfast Tin Soldier</em> so many times that the illustrations had seared themselves into my subconscious - a tiny soldier, swept through the gutters in a paper boat, drifting toward a walled city. The story gave me fever dreams for years. Sometimes I was the soldier in the boat. Sometimes I watched from somewhere above. Once the boat fell into a gutter and vanished, just like in the story.</p>
                <p>I was fascinated by the story but so saddened that the soldier kept dying. I always wanted him to make it to the castle walls and finish the journey.</p>
                <p>I'd forgotten all about the story and how real it seemed to me as a child, but when I passed through the outer gate into the walled city, I didn't fail to see the irony.</p>
                <blockquote class="story-quote">The tin soldier had finally made it beyond the gates. Alive to see all the mystery and magic of the walled city of Dubrovnik.</blockquote>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1770149008/IMG_2113.jpg" class="story-image" data-caption="Walking toward the gates - like stepping into an Andersen book." alt="Walking toward the gates of Dubrovnik">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1770149006/IMG_2116.jpg" class="story-image" data-caption="The tin soldier made it to the gates." alt="At the gates of Dubrovnik">
                </div>
                <p class="photo-caption-inline">The tin soldier made it to the gates.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about this location</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🏰</span>
                        <span>The Pearl of the Adriatic</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>UNESCO World Heritage:</strong> The old city has been a UNESCO site since 1979. Its city walls stretch nearly 2km and stand up to 25 meters high.</li>
                        <li><strong>Game of Thrones:</strong> Dubrovnik served as the primary filming location for King's Landing. The city walls, Fort Lovrijenac, and Rector's Palace all appeared on screen.</li>
                        <li><strong>Oldest Pharmacy:</strong> The Franciscan Monastery pharmacy has been operating since 1317 - one of the oldest in Europe.</li>
                        <li><strong>Republic of Ragusa:</strong> Before it was Dubrovnik, the city was the Republic of Ragusa - a maritime republic that rivaled Venice for 450 years.</li>
                        <li><strong>Earthquake of 1667:</strong> A devastating earthquake destroyed most of the city. The baroque architecture seen today was built during the reconstruction.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('dubrovnik')}
        `,
        fullDesc: "The rumors said it was a walled city. By the time we arrived, plenty of ancient ruins had been seen along both shores of the Adriatic.\n\nBut nothing prepared for walking through those gates and being transported back into the Middle Ages. It wasn't just the architecture - it was the feeling. As if centuries collapsed the moment you stepped through that stone archway.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1770163556/IMG_3618.jpg"
    },
    {
        id: 6,
        title: "Bali, Indonesia",
        coords: [-8.4095, 115.1889],
        tag: "Temples & Jungles",
        icon: "🥭",
        isDoor: false,
        useRichContent: true,
        shortDesc: "Spiritual awakenings and monkey forests.",
        fullDesc: "We did a 14-day cruise around the Indonesian archipelago on Seabourn.\n\nBali was somehow different from expectation. More spiritual. The temples seemed to breathe. The rice terraces looked hand-painted. And the monkey forest was exactly as chaotic as promised.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769821387/bali_y9gq2v.jpg",
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">🕉️</span>
                    <span class="demo-value">Sacred Temples</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🍜</span>
                    <span class="demo-value">Street Food</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🛍️</span>
                    <span class="demo-value">Markets</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">💃</span>
                    <span class="demo-value">Dancers</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Arrival</span>
                <h3 class="section-title-panel">Indonesian Welcome</h3>
                <p>We did a 14-day cruise around the Indonesian archipelago on Seabourn. When we arrived in Bali, traditional dancers in full ceremonial dress greeted us at the pier - gold headdresses, intricate batik, and that unmistakable Balinese grace.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/nw-australia-indonesia/lombock" class="story-image" data-caption="Balinese dancers in traditional costume welcomed us ashore." alt="Balinese dancers">
                <p class="photo-caption-inline">The welcome committee. Traditional Balinese dancers in full ceremonial dress.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Temples</span>
                <h3 class="section-title-panel">Where the Gods Still Live</h3>
                <p>The temples seemed to breathe. Incense curled through stone doorways. Offerings of flowers and rice appeared on every threshold. This wasn't tourism - it was daily life.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/bali/img_0277" class="story-image" data-caption="A Balinese temple with traditional architecture and manicured grounds." alt="Balinese temple">
                <p class="photo-caption-inline">Temple grounds that have been sacred for centuries.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/bali/img_0267" class="story-image" data-caption="An ornate Garuda statue - the mythical bird that carries the gods." alt="Garuda statue">
                <p class="photo-caption-inline">The Garuda - the mythical bird that carries Vishnu. You see it everywhere in Bali.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Streets</span>
                <h3 class="section-title-panel">Wandering with Friends</h3>
                <p>A group of us wandered the streets of Kuta, sampling everything we passed. Souvenir stands lined every sidewalk. Market stalls overflowed with batik fabrics and wood carvings. The energy was chaotic and wonderful.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/nw-australia-indonesia/img_0238" class="story-image" data-caption="Street scene with souvenir stands and the Indonesian flag." alt="Bali street">
                <p class="photo-caption-inline">The streets were a sensory overload - colors, sounds, smells.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/nw-australia-indonesia/img_0257" class="story-image" data-caption="Market stalls with clothing and souvenirs." alt="Market stalls">
                <p class="photo-caption-inline">Market stalls stretched on forever. The bargaining was half the fun.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/bali/img_0275" class="story-image" data-caption="Welcome at Poppies - the famous lane in Kuta." alt="Poppies Lane">
                <p class="photo-caption-inline">Poppies Lane - the famous backpacker strip. Even the signs were overwhelming.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Food</span>
                <h3 class="section-title-panel">Street Food Safari</h3>
                <p>We ate everything. Nasi goreng with crispy shallots. Satay from roadside grills. Fresh tropical fruit we couldn't identify. And when we found a beachside restaurant, we went all in.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/nw-australia-indonesia/img_0244" class="story-image" data-caption="A plate of fresh tropical fruit - watermelon, pineapple, starfruit." alt="Tropical fruit">
                <p class="photo-caption-inline">Tropical fruit arranged like art. Half of these I'd never seen before.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/nw-australia-indonesia/img_0245" class="story-image" data-caption="Indonesian rice dish with chicken and vegetables." alt="Indonesian food">
                <p class="photo-caption-inline">The real thing - not cruise ship Indonesian, but street food Indonesian.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/nw-australia-indonesia/img_0179" class="story-image" data-caption="Lobster lunch with a cold beer." alt="Lobster lunch">
                <p class="photo-caption-inline">Sometimes you celebrate properly. Fresh lobster and a cold Bintang.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Scene</span>
                <h3 class="section-title-panel">Tropical Chaos</h3>
                <p>Bali was sensory overload in the best way. Painted jeeps on the streets. The Hard Rock Cafe competing with ancient temples. Traditional and modern crashing into each other constantly.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/bali/img_0273" class="story-image" data-caption="A colorfully painted jeep on the streets of Bali." alt="Painted jeep">
                <p class="photo-caption-inline">Even the vehicles were works of art.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/bali/img_0272" class="story-image" data-caption="Hard Rock Cafe Bali - the guitar sign against tropical trees." alt="Hard Rock Bali">
                <p class="photo-caption-inline">Hard Rock Bali. Because of course there's a Hard Rock.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/nw-australia-indonesia/rest2" class="story-image" data-caption="Thatched roof entrance through a tropical garden." alt="Garden path">
                <p class="photo-caption-inline">But step off the main road and you'd find places like this - pure tropical serenity.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Return</span>
                <h3 class="section-title-panel">Back to the Ship</h3>
                <p>We sailed through the Indonesian archipelago as the sun set - island silhouettes against impossibly colored skies. Bali had delivered exactly what we needed: chaos, beauty, flavor, and stories to tell.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/bali/img_0265" class="story-image" data-caption="Sunset over the Indonesian islands from the ship." alt="Indonesian sunset">
                <p class="photo-caption-inline">Sailing away from Bali as the sun set behind the volcanic peaks.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/bali/img_0284" class="story-image" data-caption="Traditional sailing boats in Bali's harbor." alt="Bali harbor">
                <p class="photo-caption-inline">Traditional phinisi boats in the harbor - some things in Indonesia haven't changed for centuries.</p>
            </div>

            ${generateGallery('bali', 'Photos from Bali')}
        `
    },
    {
        id: 120,
        title: "Sea Days",
        coords: [-25.00, -115.00],
        tag: "Life at Sea",
        icon: "🌊",
        isDoor: false,
        shortDesc: "The rhythm between ports.",
        imagePosition: "center",
        imageCaption: "Endless ocean. Endless horizon.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">🌊</span>
                    <span class="demo-value">Endless Blue</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🎸</span>
                    <span class="demo-value">Extra Shows</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">📚</span>
                    <span class="demo-value">Time to Read</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">☀️</span>
                    <span class="demo-value">Deck Time</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Rhythm</span>
                <h3 class="section-title-panel">Days Between Ports</h3>
                <p>Sea days are when the ship becomes a floating world unto itself. No port to rush to, no excursions to catch. Just the horizon in every direction.</p>
                <p>For entertainers, sea days meant extra shows. The passengers had nowhere else to be, so they came to see us. For the crew, it was a chance to catch up - laundry, sleep, maybe a few hours on deck if you were lucky.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768532511/IMG_0240_yg0xap.jpg" class="story-image" alt="Sea day view">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768951510/Screenshot_20260120_142607_Facebook_z1yo15.jpg" class="story-image" alt="At sea">
                </div>
                <p class="photo-caption-inline">The view from deck. Nothing but water and sky.</p>
                <p>There's a rhythm to sea days that you learn to love. The gentle roll of the ship. The sound of waves. The knowledge that for today, at least, the whole world is this vessel and everyone on it.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about life at sea</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🚢</span>
                        <span>Life at Sea</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Transatlantic Crossings:</strong> The longest sea days happen on transatlantic voyages - typically 5-7 consecutive days with no land in sight.</li>
                        <li><strong>International Waters:</strong> Once 12 nautical miles from shore, you're in international waters where the ship's flag state laws apply.</li>
                        <li><strong>Ship Time:</strong> On sea days, ships often adjust clocks by an hour to gradually sync with the destination time zone.</li>
                        <li><strong>Crew Schedule:</strong> Even on sea days, crew work continues - maintenance, drills, rehearsals, and preparing for the next port.</li>
                        <li><strong>The Horizon:</strong> On a clear day at sea, you can see about 12 miles to the horizon from deck level - about 20 miles from the bridge.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('seaDays')}
        `,
        fullDesc: "Sea days are when the ship becomes a floating world unto itself. No port to rush to, no excursions to catch. Just the horizon in every direction.\n\nFor entertainers, sea days meant extra shows. For the crew, it was a chance to catch up. There's a rhythm to sea days that you learn to love.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768532511/IMG_0240_yg0xap.jpg"
    },
    {
        id: 119,
        title: "Komodo Island, Indonesia",
        coords: [-8.5450, 119.4411],
        tag: "Here Be Dragons",
        icon: "🦎",
        isDoor: false,
        shortDesc: "Face to face with prehistoric predators.",
        imagePosition: "center",
        imageCaption: "Komodo dragons - the world's largest living lizards.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">🦎</span>
                    <span class="demo-value">~3,000 Dragons</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">Lesser Sundas</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏛️</span>
                    <span class="demo-value">UNESCO Site</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🚢</span>
                    <span class="demo-value">Seabourn</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Dragons</span>
                <h3 class="section-title-panel">Prehistoric Predators</h3>
                <p>Komodo dragons are the largest living lizards on Earth - up to 10 feet long and 150 pounds of prehistoric muscle. They've been here for millions of years, unchanged.</p>
                <p>We walked through the park with rangers, keeping our distance. These things can run faster than you'd think, and their bite is loaded with bacteria. One chomp and you're done for.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768532337/DSC002971st_prbc0u.jpg" class="story-image" alt="Komodo dragon">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768532348/DSC00313_iv0cyd.jpg" class="story-image" alt="Komodo dragon close-up">
                </div>
                <p class="photo-caption-inline">Face to face with dragons. The rangers carried forked sticks - not that they'd help much.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Island</span>
                <h3 class="section-title-panel">Jurassic Park Vibes</h3>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768532354/DSC00301_czqyrm.jpg" class="story-image" alt="Komodo landscape">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768532360/DSC002982nd_rlitb4.jpg" class="story-image" alt="Komodo Island">
                </div>
                <p class="photo-caption-inline">The landscape feels like stepping back in time. Dry savanna, volcanic hills, and dragons.</p>
                <p>The whole island has this prehistoric energy. You half expect a pterodactyl to fly overhead.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Two Faces</span>
                <h3 class="section-title-panel">Same Island, Different World</h3>
                <p>Komodo transforms completely depending on when you visit.</p>
                <div class="story-gallery-grid">
                    <div style="text-align: center;">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769822864/komodo_compar_resizee_h55pu7.jpg" class="story-image" alt="Komodo dry season">
                        <p class="photo-caption-inline" style="margin-top: 0.5rem;"><strong>Dry Season (May-Oct)</strong><br>Brown savanna, African vibes</p>
                    </div>
                    <div style="text-align: center;">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769821345/here_is_what_komodo_looks_like_in_the_rainy_season_owwbxt.jpg" class="story-image" alt="Komodo rainy season">
                        <p class="photo-caption-inline" style="margin-top: 0.5rem;"><strong>Rainy Season (Nov-Apr)</strong><br>Lush green, tropical paradise</p>
                    </div>
                </div>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about this location</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🦎</span>
                        <span>Komodo National Park</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Ancient Predators:</strong> Komodo dragons have existed for about 4 million years. They're the last surviving species of a group of large lizards that once roamed Indonesia and Australia.</li>
                        <li><strong>Deadly Bite:</strong> Their saliva contains over 50 strains of bacteria plus venom glands - prey that escapes will die within 24 hours from blood poisoning.</li>
                        <li><strong>Speed Demons:</strong> Despite their size, Komodo dragons can sprint at 13 mph (21 km/h) in short bursts - faster than most humans.</li>
                        <li><strong>Limited Range:</strong> They exist only on a few Indonesian islands - Komodo, Rinca, Flores, and Gili Motang. Nowhere else on Earth.</li>
                        <li><strong>UNESCO Protected:</strong> Komodo National Park was established in 1980 to protect the dragons and was declared a UNESCO World Heritage Site in 1991.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('komodo')}
        `,
        fullDesc: "Komodo dragons are the largest living lizards on Earth - up to 10 feet long and 150 pounds of prehistoric muscle.\n\nWe walked through the park with rangers, keeping our distance. These things can run faster than you'd think, and their bite is loaded with bacteria. The whole island has this prehistoric energy.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768532337/DSC002971st_prbc0u.jpg"
    },
    {
        id: 7,
        title: "Ushuaia, Argentina",
        coords: [-54.8019, -68.3030],
        tag: "End of the World",
        icon: "🗺️",
        isDoor: false,
        shortDesc: "The southernmost city on Earth.",
        imagePosition: "center",
        imageCaption: "Ushuaia - the southernmost city on Earth.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">Tierra del Fuego</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🚢</span>
                    <span class="demo-value">Seabourn Quest</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🧭</span>
                    <span class="demo-value">54°S</span>
                </div>
            </div>

            <div class="story-section-panel">
                <p>The end of the world.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_auto,f_auto/shiplife/ushuaia/img_6607" class="story-image" alt="Tierra del Fuego">
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770190757/IMG_6608" class="story-image" alt="Tierra del Fuego">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770190755/IMG_6612" class="story-image" alt="Tierra del Fuego">
                </div>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/ushuaia/img_6615" class="story-image" alt="Tierra del Fuego">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/ushuaia/img_6619" class="story-image" alt="Tierra del Fuego">
                </div>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_auto,f_auto/shiplife/ushuaia/img_6621" class="story-image" alt="Tierra del Fuego">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_auto,f_auto/shiplife/ushuaia/img_6606" class="story-image" alt="Ushuaia">
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/ushuaia/img_6601" class="story-image" alt="Ushuaia">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770762692/IMG_6600" class="story-image" alt="Ushuaia">
                </div>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770762692/IMG_6598" class="story-image" alt="Ushuaia">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770762693/IMG_6597" class="story-image" alt="Ushuaia">
                </div>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_auto,f_auto/shiplife/ushuaia/img_6588" class="story-image" alt="Ushuaia">
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/ushuaia/img_6586" class="story-image" alt="Ushuaia">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770762704/IMG_6582" class="story-image" alt="Ushuaia">
                </div>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770762705/IMG_6581" class="story-image" alt="Ushuaia">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770762705/IMG_6579" class="story-image" alt="Ushuaia">
                </div>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_auto,f_auto/shiplife/ushuaia/20150224_131338" class="story-image" alt="Ushuaia">
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/ushuaia/img_6577" class="story-image" alt="Ushuaia">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770762697/IMG_6587" class="story-image" alt="Ushuaia">
                </div>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770762696/IMG_6594" class="story-image" alt="Ushuaia">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770762695/IMG_6595" class="story-image" alt="Ushuaia">
                </div>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_auto,f_auto/v1770838465/shiplife/ushuaia/cmnissrwkw5d8vtc6bmi" class="story-image" alt="Ushuaia">
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770762535/IMG_6602" class="story-image" alt="Ushuaia">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770838462/shiplife/ushuaia/i7i6r7k6kltw8uthq7zt" class="story-image" alt="Ushuaia">
                </div>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770838466/shiplife/ushuaia/lqky0523gozez72nam8m" class="story-image" alt="Ushuaia">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770762504/IMG_6667" class="story-image" alt="Ushuaia">
                </div>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_auto,f_auto/v1770762521/IMG_6684" class="story-image" alt="Ushuaia">
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770762529/IMG_6692" class="story-image" alt="Ushuaia">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/ushuaia/c7xcneiwndvbqmewhsgh" class="story-image" alt="Ushuaia">
                </div>
                <p>Fin del Mundo.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about this location</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🗺️</span>
                        <span>Fin del Mundo</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Southernmost City:</strong> Ushuaia is officially the world's southernmost city. It's closer to Antarctica than to Buenos Aires.</li>
                        <li><strong>Prison Colony:</strong> Originally established as a penal colony in 1896. The prison is now a museum you can visit.</li>
                        <li><strong>Tierra del Fuego:</strong> "Land of Fire" - named by Magellan's crew who saw the fires of indigenous peoples from their ships.</li>
                        <li><strong>Drake Passage:</strong> The crossing from here to Antarctica (600 miles) is one of the roughest stretches of ocean in the world.</li>
                        <li><strong>Tax Haven:</strong> Argentina made it a special economic zone in the 1970s - electronics are cheaper here than anywhere else in the country.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('ushuaia')}
        `,
        fullDesc: "The end of the world. Fin del Mundo.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/ushuaia/img_6607"
    },
    {
        id: 8,
        title: "Portofino, Italy",
        coords: [44.3046, 9.2094],
        tag: "Italian Riviera",
        icon: "🚣",
        isDoor: false,
        shortDesc: "A postcard come to life.",
        imagePosition: "center",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">Ligurian Coast</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">👥</span>
                    <span class="demo-value">~400 residents</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">⚓</span>
                    <span class="demo-value">Tender Port</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Journey</span>
                <h3 class="section-title-panel">Walking to Portofino</h3>
                <p>The best way to arrive at Portofino is on foot. The coastal path from Santa Margherita winds through olive groves and past hidden coves.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769824113/walking_to_portofino_jjhdgl.jpg" class="story-image" alt="Walking to Portofino">
                <p class="photo-caption-inline">The path hugs the coastline. Every turn reveals something new.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769823951/portofino_hike_vxjb0v.jpg" class="story-image" alt="Hiking to Portofino">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769824104/closer_to_portofino_zeglqn.jpg" class="story-image" alt="View approaching Portofino">
                </div>
                <p class="photo-caption-inline">Almost there. The villas and church tower come into view through the pines.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769824456/Screen_Shot_2026-01-30_at_8.54.52_PM_omqmyt.png" class="story-image" alt="Arrival at Portofino">
                <p class="photo-caption-inline">Arrival. Worth every step.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Village</span>
                <h3 class="section-title-panel">Concentrated Beauty</h3>
                <p>I've never seen such concentrated beauty in such a small space.</p>
                <p>Portofino is tiny - you can walk the entire town in 15 minutes. But every corner is a photograph. Pastel buildings, super-yachts in the harbor, and espresso that costs as much as a meal anywhere else.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768951563/Screenshot_20260120_140713_Facebook_wjt37q.jpg" class="story-image" data-caption="The narrow alleys of Portofino lead down to the famous harbor." alt="Portofino alley to harbor">
                <p class="photo-caption-inline">Every alley leads to the water.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about Portofino</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🚣</span>
                        <span>Italian Riviera Jewel</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Tiny Population:</strong> Only about 400 people actually live in Portofino year-round, making it one of Italy's smallest municipalities.</li>
                        <li><strong>Celebrity Haven:</strong> The harbor regularly hosts mega-yachts belonging to the world's ultra-wealthy. A coffee at the piazza can cost €15.</li>
                        <li><strong>Protected Since 1935:</strong> The entire harbor area has been a protected marine reserve since 1935, explaining its pristine condition.</li>
                        <li><strong>Literary History:</strong> Guy de Maupassant, Friedrich Nietzsche, and Ezra Pound all wrote about or visited Portofino.</li>
                        <li><strong>No Cars:</strong> The village is essentially car-free - visitors arrive by boat, bus, or on foot along the coastal path.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('portofino')}
        `,
        fullDesc: "I've never seen such concentrated beauty in such a small space.\n\nPortofino is tiny-you can walk the entire town in 15 minutes. But every corner is a photograph. Pastel buildings, super-yachts in the harbor, and espresso that costs as much as a meal anywhere else.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/a_90,w_1200,q_80,f_auto/v1769823852/portofino_blnosm.jpg"
    },
    {
        id: 9,
        title: "Ephesus, Turkey",
        coords: [38.15, 27.5],
        tag: "Ancient Echoes",
        icon: "🏛️",
        isDoor: false,
        useRichContent: true,
        shortDesc: "Walking where emperors walked.",
        fullDesc: "These ruins felt different.\n\nMaybe it was the scale-the Library of Celsus towering overhead. Or maybe it was knowing that this was once one of the largest cities in the Roman Empire. Either way, Ephesus made ancient history feel immediate.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769821545/ephesus_lynbis.jpg",
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">🏛️</span>
                    <span class="demo-value">Roman Empire</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">📚</span>
                    <span class="demo-value">Library of Celsus</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">👥</span>
                    <span class="demo-value">250,000 (Ancient)</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🚢</span>
                    <span class="demo-value">From Kuşadası</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Scale</span>
                <h3 class="section-title-panel">Walking Through History</h3>
                <p>These ruins felt different. Maybe it was the scale - Ephesus was once home to 250,000 people, one of the largest cities in the Roman Empire.</p>
                <p>The Great Theatre could seat 25,000. I stood in those stone seats and tried to imagine the crowds, the performances, the riots that Paul of Tarsus sparked here.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/ephesus/pvlwakkcy1tpdrqdz5sl.jpg" class="story-image" data-caption="The Great Theatre of Ephesus - could seat 25,000 spectators." alt="Ephesus theater">
                <p class="photo-caption-inline">The Great Theatre. Twenty-five thousand seats carved into the hillside.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Architecture</span>
                <h3 class="section-title-panel">Roman Engineering</h3>
                <p>Every doorway, every arch, every column tells a story of Roman engineering and ambition. These weren't just buildings - they were statements of power.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/ephesus/tdzsohjznkxggjogg1f5.jpg" class="story-image" data-caption="A Roman arch - doorways that have stood for two millennia." alt="Roman arch at Ephesus">
                <p class="photo-caption-inline">A doorway that has stood for two thousand years. People walked through here when Rome ruled the world.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/ephesus/jrp1x9miudml2bf4vh3f.jpg" class="story-image" data-caption="The Fountain of Trajan - grandeur in marble and stone." alt="Fountain of Trajan">
                <p class="photo-caption-inline">The Fountain of Trajan. Imagine this in its prime - water flowing, statues gleaming.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Curetes Street</span>
                <h3 class="section-title-panel">The Main Thoroughfare</h3>
                <p>Curetes Street was the main road through ancient Ephesus, lined with shops, monuments, and temples. At the end: the Library of Celsus.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/ephesus/gghblkp17bdss4uqxs0p.jpg" class="story-image" data-caption="Curetes Street - the main avenue of ancient Ephesus." alt="Curetes Street">
                <p class="photo-caption-inline">Walking Curetes Street. The marble is worn smooth by millions of ancient footsteps.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/ephesus/hvihpg51w4dikitabenp.jpg" class="story-image" data-caption="Looking down Curetes Street toward the Library of Celsus." alt="Curetes Street with Library">
                <p class="photo-caption-inline">The view that drew everyone forward - the Library of Celsus waiting at the end.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Temple</span>
                <h3 class="section-title-panel">Temple of Hadrian</h3>
                <p>The Temple of Hadrian is one of Ephesus's best-preserved structures. Guides show you artist reconstructions of what it once looked like - the difference is staggering.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/ephesus/w1v3zi5c4nkljnimmmwr.jpg" class="story-image" data-caption="The Temple of Hadrian - comparing the ruins to artist reconstructions." alt="Temple of Hadrian">
                <p class="photo-caption-inline">A guide showing what the Temple of Hadrian would have looked like. The colors. The statues. The grandeur.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Terrace Houses</span>
                <h3 class="section-title-panel">How the Wealthy Lived</h3>
                <p>The Terrace Houses show how Ephesus's elite lived - heated floors, running water, frescoed walls, mosaic floors. Two thousand years ago, this was the height of luxury.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/ephesus/uip2bmfnaovatphxxker.jpg" class="story-image" data-caption="Marble walls in the Terrace Houses - luxury Roman living." alt="Terrace Houses marble">
                <p class="photo-caption-inline">Marble walls in a wealthy Roman's home. The patterns are still vivid.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/ephesus/bbd8km3d6ly1xxdkbmiz.jpg" class="story-image" data-caption="Intricate mosaic floors preserved for two millennia." alt="Roman mosaics">
                <p class="photo-caption-inline">Mosaic floors that have survived earthquakes, wars, and time itself.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/ephesus/wf1fyqwcngjp1nexvae9.jpg" class="story-image" data-caption="Archaeological restoration in progress - painstaking work preserving the past." alt="Restoration work">
                <p class="photo-caption-inline">Restoration in progress. Preserving these treasures is painstaking work.</p>
            </div>

            ${generateGallery('ephesus', 'Photos from Ephesus (40)')}
        `
    },
    {
        id: 10,
        title: "Rome, Italy",
        coords: [41.9028, 12.4964],
        tag: "Colosseum Dreams",
        icon: "🏟️",
        isDoor: false,
        shortDesc: "The eternal city never disappoints.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/v1770838005/shiplife/rome/xn0otmdalw0ppnagpzxu.jpg",
        imagePosition: "center",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">Civitavecchia Port</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏛️</span>
                    <span class="demo-value">2,700+ Years Old</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🚢</span>
                    <span class="demo-value">Multiple Visits</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Getting There</span>
                <h3 class="section-title-panel">The Journey from the Port</h3>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1770838012/shiplife/rome/girorp2kzs39ndiwhsab.jpg" class="story-image" data-caption="The port of Civitavecchia." alt="Civitavecchia port">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1770838010/shiplife/rome/l6fqmoutdg0tnj26sjgn.jpg" class="story-image" data-caption="The port town of Civitavecchia." alt="Civitavecchia port">
                <p class="photo-caption-inline">The port town of Civitavecchia. Rome is about 80km inland.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1770838028/shiplife/rome/pfwy9pa0hz92crmpnrxo.jpg" class="story-image" data-caption="Train ticket to Rome." alt="Train ticket">
                <p class="photo-caption-inline">I bought my train ticket to the city.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1770838029/shiplife/rome/msz5gefit3ybqzbch4w5.jpg" class="story-image" data-caption="Train tracks at Civitavecchia." alt="Train tracks">
                <p class="photo-caption-inline">I hope I boarded the right train. I couldn't find anyone who spoke English and I was late getting to the right spot in the station.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1770838021/shiplife/rome/pew93ifghhoqnuyqsieq.jpg" class="story-image" data-caption="View from the train to Rome." alt="View from train">
                <p class="photo-caption-inline">On the train. Still had no idea if I was going in the right direction.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1770838011/shiplife/rome/zxkjwys2pjwmq0pyxp3y.jpg" class="story-image" data-caption="The Colosseum." alt="The Colosseum">
                <p class="photo-caption-inline">Finally, I arrived.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Eternal City</span>
                <h3 class="section-title-panel">Always Something New</h3>
                <p>Every time I visited Rome, I found something new. The Colosseum at sunset. A hidden trattoria in Trastevere. The way the light hits the Spanish Steps in the early morning.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1770838017/shiplife/rome/e0ameitjiqqu9e0mxi43.jpg" class="story-image" data-caption="Rome, Italy" alt="Rome">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1770838018/shiplife/rome/kxyte3ynr7355ezc3lgq.jpg" class="story-image" data-caption="Rome, Italy" alt="Rome">
                </div>
                <p class="photo-caption-inline">Rome rewards those who explore.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1770838005/shiplife/rome/xn0otmdalw0ppnagpzxu.jpg" class="story-image" data-caption="Rome, Italy" alt="Rome">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1770838004/shiplife/rome/e9pz8a6daycsfx5pgcwr.jpg" class="story-image" data-caption="Rome, Italy" alt="Rome">
                </div>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1770838006/shiplife/rome/prbj3sgvcfsnb1nlcqc9.jpg" class="story-image" data-caption="Rome, Italy" alt="Rome">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1770838014/shiplife/rome/qsrhsjw3lpcdnbr3yv7p.jpg" class="story-image" data-caption="Rome, Italy" alt="Rome">
                </div>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1770838016/shiplife/rome/fdgqcjiqjmlnewfg2lar.jpg" class="story-image" data-caption="Rome, Italy" alt="Rome">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1770838015/shiplife/rome/ovpgv5wsd5mgvbijcxhj.jpg" class="story-image" data-caption="Rome, Italy" alt="Rome">
                </div>
            </div>

            <details class="collapsible-gallery">
                <summary>More Roman Architecture</summary>
                <div class="gallery-story-section">
                    <div class="story-gallery-grid">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1770838008/shiplife/rome/fh9wnajmt3blqcq0q09f.jpg" class="story-image" data-caption="Rome, Italy" alt="Rome">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1770838003/shiplife/rome/vtdolegstghw3pmp9hnn.jpg" class="story-image" data-caption="Rome, Italy" alt="Rome">
                    </div>
                    <div class="story-gallery-grid">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1770838003/shiplife/rome/afsgrck9i4z3pqn6p6wb.jpg" class="story-image" data-caption="Rome, Italy" alt="Rome">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1770838002/shiplife/rome/ddlpxcctghpyhgpcoi96.jpg" class="story-image" data-caption="Rome, Italy" alt="Rome">
                    </div>
                    <div class="story-gallery-grid">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1770838001/shiplife/rome/gtuu19gmolzawnz26bkj.jpg" class="story-image" data-caption="Rome, Italy" alt="Rome">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1770838000/shiplife/rome/bijtthnfuufykoykynfw.jpg" class="story-image" data-caption="Rome, Italy" alt="Rome">
                    </div>
                </div>
            </details>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about Rome</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🏟️</span>
                        <span>The Eternal City</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Civitavecchia:</strong> Rome's cruise port is about 80km from the city center - plan for a full day excursion.</li>
                        <li><strong>The Colosseum:</strong> Could hold 50,000-80,000 spectators. The wooden arena floor covered a complex underground network of tunnels and animal cages.</li>
                        <li><strong>Trevi Fountain:</strong> About €3,000 in coins is thrown in daily. The money goes to Caritas to fund food programs for the poor.</li>
                        <li><strong>Vatican City:</strong> The world's smallest country (0.44 km²) is technically a separate nation within Rome.</li>
                        <li><strong>Seven Hills:</strong> Rome was famously built on seven hills - Aventine, Caelian, Capitoline, Esquiline, Palatine, Quirinal, and Viminal.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('rome')}
        `,
        fullDesc: "Every time I visited Rome, I found something new.\n\nThe Colosseum at sunset. A hidden trattoria in Trastevere. The way the light hits the Spanish Steps in the early morning. Rome rewards those who explore.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1770838013/shiplife/rome/quivocfdmtgthgs0iblj.jpg"
    },
    {
        id: 11,
        title: "Sydney, Australia",
        coords: [-33.8688, 151.2093],
        tag: "The Transformation",
        icon: "🎹",
        isDoor: false,
        shortDesc: "The guitarist who had to become a pianist. Overnight.",
        imagePosition: "center",
        imageCaption: "Darling Harbour, December 2009. The day before everything changed.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">🚢</span>
                    <span class="demo-value">Pacific Jewel</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">📅</span>
                    <span class="demo-value">December 2009</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🎹</span>
                    <span class="demo-value">The Orient Bar</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🎭</span>
                    <span class="demo-value">Inaugural Voyage</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Call</span>
                <h3 class="section-title-panel">"You Do Play Piano, Right?"</h3>
                <p>My first contract on the Pacific Sun had ended. I was home for a month. Waiting.</p>
                <p>During my last week at sea, I'd gotten word that P&O wanted me back. But nobody said which ship. Nobody said what I'd be doing.</p>
                <p>Then the phone rang.</p>
                <p>My agent. P&O wanted me in Singapore in four weeks. Dry dock. A "new" ship called the Pacific Jewel. But there was a catch.</p>
                <p>They didn't want me as a guitarist.</p>
                <p>They wanted me in something called "The Orient Bar."</p>
                <p>At the piano.</p>
                <blockquote class="story-quote">"You do play piano, right?"</blockquote>
                <p>Well. Yeah. Kind of.</p>
                <p>I'd worked a piano bar once. Back in 1984. I was 18. Didn't last the summer.</p>
                <p>I play by ear. I knew I could get through all the Billy Joel and Elton John I'd ever need. But was I a <em>pianist</em>?</p>
                <p>Not really.</p>
                <p>Not yet.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Singapore</span>
                <h3 class="section-title-panel">The Construction Zone</h3>
                <p>I boarded the Pacific Jewel with about a month left of dry dock.</p>
                <p>The ship was not a ship. It was a construction site that happened to float.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769037282/058_yjvfcg.jpg" class="story-image" data-caption="Pacific Jewel in dry dock, Singapore." alt="Pacific Jewel in dry dock">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769037276/102_ly7caf.jpg" class="story-image" data-caption="The Jewel getting her name - one of the last things they do before leaving dry dock." alt="Jewel getting its name">
                </div>
                <p class="photo-caption-inline">Pacific Jewel in dry dock. Workers everywhere. Scaffolding. Chaos. This was home now.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769455518/100_ik4c2a.jpg" class="story-image" data-caption="Workers biking past the Jewel on their lunch break." alt="Dry dock workers biking">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769455580/061_mtftgb.jpg" class="story-image" data-caption="The dry dock in full swing." alt="Dry dock">
                </div>
                <p class="photo-caption-inline">Lunch break. Workers biking past like this was just another day. For them it was.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769455594/057-2_fr8tmk.jpg" class="story-image" data-caption="Dry dock operations." alt="Dry dock">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769455599/056-2_eekdld.jpg" class="story-image" data-caption="The Jewel being transformed." alt="Dry dock transformation">
                </div>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769462730/062_c5wqik.jpg" class="story-image" data-caption="Christmas decorations in dry dock." alt="Christmas in dry dock">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769031185/060_mhyxga.jpg" class="story-image" data-caption="The Orient Bar during dry dock. Under construction." alt="Orient Bar under construction">
                <p class="photo-caption-inline">The Orient Bar. Under construction. Plastic sheeting. Sawdust. Half-finished fixtures. But the piano worked.</p>
                <p>Contractors everywhere. People yelling in languages I didn't recognize. Cafeteria lines a mile long. Project managers, welders, electricians, us.</p>
                <p>We ate with them. Partied with them. Sweated through the sticky Singapore heat with them. Tripped over them.</p>
                <p>The musicians got close fast. We had chores during the day, nothing too bad, but we escaped whenever we could.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Exploring</span>
                <h3 class="section-title-panel">Getting Off The Ship</h3>
                <p>I came to know Singapore pretty well in the month-long stay. I learned my way around the Singapore MRT, and I scouted out all of the free wifi spots in the city, from the internet cafes to the malls.</p>
                <blockquote class="story-quote">Malls meant two things: food and wifi.</blockquote>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,a_90/v1769037282/072-2_hxubqq.jpg" class="story-image" data-caption="The Singapore MRT. Our escape route." alt="Singapore MRT">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769037282/073_jozbht.jpg" class="story-image" data-caption="The MRT station." alt="Singapore MRT">
                </div>
                <p class="photo-caption-inline">The MRT. Our escape route to air conditioning and wifi.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769037276/012-2_m4xovl.jpg" class="story-image" data-caption="The electronics mall. My favorite spot in Singapore." alt="Electronics mall">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769454682/IMG_0302_fq3c0b.jpg" class="story-image" data-caption="Inside one of Singapore's massive malls." alt="Singapore mall interior">
                </div>
                <p class="photo-caption-inline">The electronics mall. My favorite spot in Singapore. Air conditioning. Wifi. Escape from the heat.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769037276/081_rjivqx.jpg" class="story-image" data-caption="Marina Bay Sands under construction - we'd return in 2013 to see it finished." alt="Marina Bay Sands">
                <p class="photo-caption-inline">Marina Bay Sands. Not even finished yet. We'd return in 2013 on Seabourn to see the completed towers.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769037266/028-4_vgjdyu.jpg" class="story-image" data-caption="Musicians bonding in Singapore: Richard, Ashley, and Thomas." alt="Musicians bonding">
                <p class="photo-caption-inline">Richard, Ashley, and Thomas. We were in this together.</p>
                <div class="story-gallery-grid-small">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_80/v1769455525/094_n9zzxl.jpg" class="gallery-thumb" data-caption="Singapore streets." alt="Singapore">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_80/v1769455561/077_atpyn7.jpg" class="gallery-thumb" data-caption="Exploring Singapore." alt="Exploring Singapore">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_80/v1769462789/093_fpt2cj.jpg" class="gallery-thumb" data-caption="Raffles." alt="Raffles">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_80/v1769037276/029-3_dz16wt.jpg" class="gallery-thumb" data-caption="Exploring Singapore." alt="Singapore park">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_80/v1769037268/017_ngcz3a.jpg" class="gallery-thumb" data-caption="The park." alt="Park">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_80/v1769462816/006_tlvpn1.jpg" class="gallery-thumb" data-caption="Singapore sights." alt="Singapore">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_80/v1769462839/084-2_ws7xgu.jpg" class="gallery-thumb" data-caption="Singapore park." alt="Singapore park">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_80/v1769462852/082_rhjfde.jpg" class="gallery-thumb" data-caption="Singapore exploring." alt="Singapore exploring">
                </div>
                <p class="photo-caption-inline">Exploring Singapore. Raffles, the parks, the sights. We escaped whenever we could.</p>
                <p>That was the escape. But underneath it all, underneath the exploring and the jokes and the long walks through the city, there was worry.</p>
                <p>I wasn't ready.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Preparation</span>
                <h3 class="section-title-panel">Pounding the Keys</h3>
                <p>Every night during dry dock, I worked in the Orient Bar until late. I had over a hundred songs on my list.</p>
                <p>But when I sat down to play? I kept falling back on the same 30.</p>
                <p>That was a problem.</p>
                <p>There were two other pianists in our group. Ashley, our band master. And Alexander, a child prodigy type, pure Liberace energy. Both were incredibly supportive. They had to be.</p>
                <p>I was nervous as hell.</p>
                <p>After dry dock, we sailed back to Auckland and then on to Sydney for the inaugural voyage. I practiced the whole way. Every spare moment at that piano, trying to expand my repertoire from 30 songs to something respectable.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769030580/025_yqujzb.jpg" class="story-image" data-caption="The Orient Bar, finished." alt="The Orient Bar">
                <p class="photo-caption-inline">The Orient Bar. Finished. Elegant. Intimidating. The room that terrified me.</p>
                <p>The first time I saw the finished Orient Bar, the elegant room, the beautiful baby grand, the view out to sea, my fear didn't go away.</p>
                <p>It grew.</p>
                <p>But I was with the Food & Beverage Manager. I couldn't let it show.</p>
                <p>Only my second contract at sea. But I'd already learned the importance of chain of command.</p>
                <p>You don't let them see you sweat.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Stakes</span>
                <h3 class="section-title-panel">Oh Holy Shit</h3>
                <p>Unlike my first contract on the Pacific Sun, the P&O Pacific Jewel itinerary was built for longer runs. Sometimes 18 days before we would return to Sydney to pick up another ship full of passengers.</p>
                <p>That meant I was required to entertain the same groups of people for twice as long.</p>
                <p>And this first cruise wasn't just any cruise.</p>
                <p>This was the <em>inaugural</em> voyage.</p>
                <p>There would be dignitaries on board.</p>
                <p>VIPs.</p>
                <p>The Governor.</p>
                <blockquote class="story-quote">Oh holy shit.</blockquote>
                <p>Yeah.</p>
                <p>I was nervous.</p>
                <p>Would you be?</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Darling Harbour</span>
                <h3 class="section-title-panel">Inaugural Voyage Day</h3>
                <p>December 12th, 2009.</p>
                <p>Darling Harbour, Sydney.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,a_90/v1769455293/039-3_z79ldk.jpg" class="story-image" data-caption="Getting ready to board on the red carpet. I've never been so nervous." alt="Red carpet boarding">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769030579/030_lzogz2.jpg" class="story-image" data-caption="Standing in front of the Pacific Jewel at Darling Harbour." alt="Derrick at Darling Harbour">
                </div>
                <p class="photo-caption-inline">I felt like a movie star. I was terrified. I've never been so nervous. I wasn't ready for this.</p>
                <p>That's me. Standing in front of the Pacific Jewel. Opera House in the background. Black suit. Big smile.</p>
                <p>The smile was real. So was the terror underneath it.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769454688/008-2_jyut47.jpg" class="story-image" data-caption="Pacific Jewel in Sydney Harbour." alt="Pacific Jewel in Sydney Harbour">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769031021/026-5_r4ehv3.jpg" class="story-image" data-caption="Sydney Harbour panorama." alt="Sydney Harbour">
                </div>
                <p class="photo-caption-inline">Sydney Harbour. This was a big deal.</p>
                <div class="story-gallery-grid-small">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_80/v1769455039/033_jyc0u9.jpg" data-caption="Exploring Darling Harbour." alt="Darling Harbour">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_80/v1769455254/004-5_osr9fe.jpg" data-caption="Darling Harbour promenade." alt="Darling Harbour promenade">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_80/v1769455213/019-5_tgfloj.jpg" data-caption="A local in the Royal Botanic Garden." alt="Bird in botanical gardens">
                </div>
                <p class="photo-caption-inline">Darling Harbour. The Royal Botanic Garden. Even the locals came out to see what the fuss was about.</p>
                <p>That night: the inaugural party. Pink Hummer limos pulling up. Crowds everywhere. A stage on the dock. Fireworks planned for midnight.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769030579/035_lhmdeq.jpg" class="story-image" data-caption="The inaugural party setup. Pink Hummer limos." alt="Inaugural party setup">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769031099/046-2_csspcp.jpg" class="story-image" data-caption="The deck party at night." alt="Deck party">
                </div>
                <p class="photo-caption-inline">The setup. The deck party. Would it rain?</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769037257/043-3_qkjmjo.jpg" class="story-image" data-caption="Musos waiting for the sky to clear. Would it rain?" alt="Waiting for fireworks">
                <p class="photo-caption-inline">Musos waiting for the sky to clear.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769037256/016-5_pqce0o.jpg" class="story-image" data-caption="Famous Australian talent showed up for the party." alt="Australian celebrity">
                <p class="photo-caption-inline">Big Australian talent showed up for the party.</p>
                <p>I was either going to sink or swim in the days ahead.</p>
                <p>No in-between.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Sailing Out</span>
                <h3 class="section-title-panel">The Opera House at Night</h3>
                <p>We pulled away from the dock.</p>
                <p>The Opera House slid past. Lit up. Glowing against the dark.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769030580/060_dczkem.jpg" class="story-image" data-caption="Opera House at night as we sailed away." alt="Opera House at night">
                <p class="photo-caption-inline">Through the porthole. Then past us. Then gone.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769455266/056-4_zckas4.jpg" class="story-image" data-caption="Fireworks for the Jewel's inaugural voyage." alt="Inaugural fireworks">
                <p class="photo-caption-inline">Fireworks lit up the harbour. The inaugural voyage had begun.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769030579/045_ngolea.jpg" class="story-image" data-caption="Sydney Showboat escorting us out." alt="Sydney Showboat">
                <p class="photo-caption-inline">Sydney Showboat escorting us into the night.</p>
                <p>Somewhere in that harbor, the guitarist I used to be stayed behind.</p>
                <p>The pianist I was about to become?</p>
                <p>He sailed out into the dark.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Transformation</span>
                <h3 class="section-title-panel">The First Night</h3>
                <p>I wasn't scheduled to play until the ship started pulling away from Darling Harbour.</p>
                <p>By then it was late. Guests were still in their cabins after their first afternoon on board, still finding their way around. The Orient Bar was on Deck 7, towards the back of the ship. Not everyone would find it right away.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769037243/004-6_gfk1p1.jpg" class="story-image" data-caption="Me at the piano in the Orient Bar." alt="Derrick at the piano">
                <p class="photo-caption-inline">Me at the piano. The Orient Bar. Elegant. Intimidating. Mostly windows.</p>
                <p>A few people came in and sat down at first.</p>
                <p>I played. The sound of a baby grand piano in a mostly empty room that was mostly windows. It was jarring. Every note hung in the air. Every squeak of the foot pedals. Every plink of my fingers on the keys.</p>
                <p>Then, mid-ballad, what I thought was one of my most impassioned performances of the evening, a couple walked up and asked if I could take their photo.</p>
                <blockquote class="story-quote">Sure. Of course.</blockquote>
                <p>Things settled into a cozy routine after that. I adjusted to the sound of the room. To the quiet.</p>
                <p>And then suddenly, people started walking in from both sides of the bar. Fifty of them. Maybe more.</p>
                <p>The Orient Bar came alive.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769037243/005-7_muz86f.jpg" class="story-image" data-caption="My first night in the Orient." alt="First night Orient Bar">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769037243/003-7_vqkbd8.jpg" class="story-image" data-caption="Me with guests in the Orient Bar." alt="With guests">
                </div>
                <p class="photo-caption-inline">The room came alive. Guests everywhere.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769037257/002-7_bmhskm.jpg" class="story-image" data-caption="More guests in the Orient." alt="More guests">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769037256/001-5_exb3r6.jpg" class="story-image" data-caption="The bar full of life." alt="Orient Bar guests">
                </div>
                <p class="photo-caption-inline">This was what I'd been terrified of. This was what I'd been waiting for.</p>
                <p>For the next four months, I often wished for that quiet piano room again. The one where I could hear each squeak of the pedals, each plink of the keys.</p>
                <p>But that's when it hit me. There's a rhythm to certain things on a ship. A coordinated effort between all the elements of life at sea. The dining, the entertainment, the shore excursions, even the sea days. The entire crew works together to achieve that rhythm. And to keep it going through good and bad.</p>
                <blockquote class="story-quote">I wasn't drowning.</blockquote>
                <blockquote class="story-quote">I was swimming.</blockquote>
                <p>The ship had been transformed in Singapore. Stripped down to the hull and rebuilt into something new.</p>
                <p>So had I.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about this moment</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🎹</span>
                        <span>The Numbers</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>The Ship:</strong> Pacific Jewel was originally Crown Princess (1990). Rebuilt and renamed for P&O Australia in 2009.</li>
                        <li><strong>The Room:</strong> The Orient Bar. Deck 7. Asian-inspired decor. One beautiful baby grand piano.</li>
                        <li><strong>The Setlist:</strong> 1,127 songs in my repertoire book. Billy Joel. Elton John. Broadway. Classical. Ragtime. Country. About 30 of them actually ready.</li>
                        <li><strong>The Date:</strong> December 12, 2009. Inaugural voyage. Governor of New South Wales on board.</li>
                        <li><strong>The Cruises:</strong> Up to 18 days at sea. No hiding if you weren't ready. No faking it for that long.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('sydney')}
        `,
        fullDesc: "My agent called with a catch: P&O wanted me back, but not as a guitarist. They wanted me at the piano.\n\n'You do play piano, right?'\n\nWell. Yeah. Kind of.\n\nThe ship was transformed in Singapore. So was I.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769030579/030_lzogz2.jpg"
    },
    {
        id: 12,
        title: "Milford Sound, New Zealand",
        coords: [-44.6414, 167.8974],
        tag: "Eighth Wonder",
        icon: "⛰️",
        isDoor: false,
        useRichContent: true,
        shortDesc: "Fjords that defy description.",
        fullDesc: "Rudyard Kipling called it the eighth wonder of the world.\n\nHe wasn't wrong. We sailed slowly through the sound as waterfalls cascaded down sheer cliffs into the dark water. Dolphins played in our wake. It was one of those rare moments where everyone on deck just fell silent.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/fiordland/img_4278",
        richContent: `
            <div class="story-section-panel">
                <p>Rudyard Kipling called it the eighth wonder of the world. He wasn't wrong.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_auto,f_auto/shiplife/fiordland/img_4169" class="story-image" alt="Milford Sound">
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/fiordland/img_4185" class="story-image" alt="Milford Sound">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/fiordland/img_4188" class="story-image" alt="Milford Sound">
                </div>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/fiordland/img_4191" class="story-image" alt="Milford Sound">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/fiordland/img_4195" class="story-image" alt="Milford Sound">
                </div>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_auto,f_auto/shiplife/fiordland/img_4206" class="story-image" alt="Milford Sound">
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/fiordland/img_4207" class="story-image" alt="Milford Sound">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/fiordland/img_4211" class="story-image" alt="Milford Sound">
                </div>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_auto,f_auto/shiplife/fiordland/img_4217" class="story-image" alt="Milford Sound">
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/fiordland/img_4231" class="story-image" alt="Milford Sound">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/fiordland/img_4237" class="story-image" alt="Milford Sound">
                </div>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/fiordland/img_4241" class="story-image" alt="Milford Sound">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/fiordland/img_4244" class="story-image" alt="Milford Sound">
                </div>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_auto,f_auto/shiplife/fiordland/img_4263" class="story-image" alt="Milford Sound">
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/fiordland/img_4282" class="story-image" alt="Milford Sound">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/fiordland/img_0802" class="story-image" alt="Fiordland">
                </div>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/fiordland/img_4288" class="story-image" alt="Milford Sound">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/fiordland/img_4290" class="story-image" alt="Milford Sound">
                </div>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_auto,f_auto/shiplife/fiordland/img_4292" class="story-image" alt="Milford Sound">
                <p>It was one of those rare moments where everyone on deck just fell silent.</p>
            </div>

            ${generateGallery('fiordland')}
        `
    },
    {
        id: 13,
        title: "Akaroa, New Zealand",
        coords: [-43.8037, 172.9686],
        tag: "French Corner",
        icon: "🍷",
        isDoor: false,
        useRichContent: true,
        shortDesc: "A slice of France in New Zealand.",
        fullDesc: "This tiny town on Banks Peninsula has French street names and French bakeries.\n\nIt's the result of a quirky colonial history-French settlers arrived just days after the British claimed the islands. The French decided to stay anyway. Good choice.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-09_xdpvet.jpg",
        richContent: `
            <div class="story-section-panel">
                <span class="section-tag-panel">The Walk</span>
                <h3 class="section-title-panel">Edge of the World</h3>
                <p>There was something very peaceful and tranquil about New Zealand, but this feeling was magnified in spots like Akaroa.</p>
                <p>The walk around the harbor almost compelled you along, and before you knew it you'd be standing at the edge - with the lighthouse and the ancient forest graveyard that was dying (pun intended) to be in a Stephen King movie.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1769817323/IMG_0843_bhszx1.jpg" class="story-image" alt="Ancient forest graveyard">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1769817327/IMG_0842_fj656g.jpg" class="story-image" alt="Stephen King graveyard vibes">
                </div>
                <p class="photo-caption-inline">The ancient forest graveyard - straight out of a Stephen King novel.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Harbor</span>
                <h3 class="section-title-panel">Hardy Boys Mystery Vibes</h3>
                <p>I felt like I was in a Hardy Boys mystery novel for some strange reason. Maybe it was the quiet. Maybe it was the way the light hit the water. Maybe it was knowing that this tiny French corner of New Zealand existed at all.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-11_hzettl.jpg" class="story-image" alt="Akaroa harbor view">
                <p class="photo-caption-inline">The harbor stretched out like a secret waiting to be discovered.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-12_p6l8ha.jpg" class="story-image" alt="Akaroa landscape">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-13_vxtdlc.jpg" class="story-image" alt="Akaroa scenery">
                </div>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-14_aibkvr.jpg" class="story-image" alt="Akaroa views">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-15_siokxm.jpg" class="story-image" alt="Akaroa coastline">
                </div>
                <p class="photo-caption-inline">Every angle revealed something new.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Gallery</span>
                <h3 class="section-title-panel">More From Akaroa</h3>
                <details class="collapsible-gallery">
                    <summary>View all photos from Akaroa (24 more)</summary>
                    <div class="story-gallery-grid">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-01_yakkpj.jpg" class="story-image" alt="Akaroa">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-02_rcfy42.jpg" class="story-image" alt="Akaroa">
                    </div>
                    <div class="story-gallery-grid">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-03_mazn3s.jpg" class="story-image" alt="Akaroa">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-04_ph0r74.jpg" class="story-image" alt="Akaroa">
                    </div>
                    <div class="story-gallery-grid">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-05_v26ryz.jpg" class="story-image" alt="Akaroa">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-06_t4ay3f.jpg" class="story-image" alt="Akaroa">
                    </div>
                    <div class="story-gallery-grid">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-07_wskpez.jpg" class="story-image" alt="Akaroa">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-08_i7tlb9.jpg" class="story-image" alt="Akaroa">
                    </div>
                    <div class="story-gallery-grid">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-10_jbnkjf.jpg" class="story-image" alt="Akaroa">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-16_e7rro9.jpg" class="story-image" alt="Akaroa">
                    </div>
                    <div class="story-gallery-grid">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-17_vncbyi.jpg" class="story-image" alt="Akaroa">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-18_nqkyw9.jpg" class="story-image" alt="Akaroa">
                    </div>
                    <div class="story-gallery-grid">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-19_ywgloa.jpg" class="story-image" alt="Akaroa">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-20_icr5jf.jpg" class="story-image" alt="Akaroa">
                    </div>
                    <div class="story-gallery-grid">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-21_yrnnkf.jpg" class="story-image" alt="Akaroa">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-22_ya66e6.jpg" class="story-image" alt="Akaroa">
                    </div>
                    <div class="story-gallery-grid">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-23_fpnuh0.jpg" class="story-image" alt="Akaroa">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-24_zqrbua.jpg" class="story-image" alt="Akaroa">
                    </div>
                    <div class="story-gallery-grid">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-25_gbv86c.jpg" class="story-image" alt="Akaroa">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-26_bxui9c.jpg" class="story-image" alt="Akaroa">
                    </div>
                    <div class="story-gallery-grid">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-27_dcjsfn.jpg" class="story-image" alt="Akaroa">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-28_sqmebs.jpg" class="story-image" alt="Akaroa">
                    </div>
                    <div class="story-gallery-grid">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-29_t7whzs.jpg" class="story-image" alt="Akaroa panorama">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/akaroa-30_yrmpiw.jpg" class="story-image" alt="Akaroa lighthouse panorama">
                    </div>
                    <div class="story-gallery-grid">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769817323/IMG_0843_bhszx1.jpg" class="story-image" alt="Akaroa graveyard">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769817327/IMG_0842_fj656g.jpg" class="story-image" alt="Akaroa forest graveyard">
                    </div>
                </details>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about this location</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🇫🇷</span>
                        <span>French New Zealand</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Colonial Race:</strong> French settlers arrived in 1840, just days after the British signed the Treaty of Waitangi. They stayed anyway and built their own community.</li>
                        <li><strong>Volcanic Origins:</strong> Banks Peninsula (where Akaroa sits) is formed from two extinct volcanoes. The harbor is actually a flooded volcanic crater.</li>
                        <li><strong>Hector's Dolphins:</strong> The world's smallest and rarest dolphins live here - found nowhere else on Earth.</li>
                        <li><strong>French Street Names:</strong> Rue Lavaud, Rue Jolie, Rue Balguerie - the French influence is everywhere, including bakeries serving authentic pastries.</li>
                        <li><strong>Population:</strong> About 600 permanent residents, but the tiny town receives over 500,000 visitors annually.</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        id: 14,
        title: "Wellington, New Zealand",
        coords: [-41.2865, 174.7762],
        tag: "Coolest Little Capital",
        icon: "🎉",
        isDoor: false,
        useRichContent: true,
        shortDesc: "The cool little capital.",
        fullDesc: "New Zealand's capital lived up to its nickname—the coolest little capital in the world. Compact, walkable, with a thriving arts scene and some of the best craft beer in the Southern Hemisphere. Wellington felt like home.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769816673/wellington_dsv7qd.jpg",
        richContent: `
            <div class="story-section-panel">
                <span class="section-tag-panel">The Wind</span>
                <h3 class="section-title-panel">Windy Wellington</h3>
                <p>They call it "Windy Wellington" and they're not exaggerating. The city sits on the Cook Strait, and the wind funnels through with startling force.</p>
                <p>Locals don't carry umbrellas—they'd just invert. Instead, they lean into it, literally, walking at angles that would look absurd anywhere else.</p>
                <p>But the wind keeps the air clean, the sky clear, and the city invigorated. Wellington earns its energy from the elements.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Culture</span>
                <h3 class="section-title-panel">Coffee and Film</h3>
                <p>Wellington punches above its weight culturally. The coffee scene rivals Melbourne's. Te Papa, the national museum, is genuinely world-class and free.</p>
                <p>And then there's Weta Workshop—where Peter Jackson built Middle-earth. The Lord of the Rings wasn't just filmed here; it was invented here. The creative energy stuck around.</p>
                <p>For a city of 215,000, Wellington has the cultural infrastructure of somewhere much larger.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about this location</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🎬</span>
                        <span>Capital Facts</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Weta Workshop:</strong> The special effects company behind LOTR, Avatar, and countless other films is based here.</li>
                        <li><strong>Cable Car:</strong> The iconic red cable car has been running since 1902.</li>
                        <li><strong>Craft Beer:</strong> Wellington has more bars per capita than New York City.</li>
                        <li><strong>Earthquake Zone:</strong> The city sits on a major fault line. Buildings are designed to sway.</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        id: 15,
        title: "Picton, New Zealand",
        coords: [-41.2930, 174.0079],
        tag: "Rolling Green Hills",
        icon: "🍇",
        isDoor: false,
        shortDesc: "Gateway to wine country.",
        imagePosition: "center",
        useRichContent: true,
        richContent: `
            <div class="story-section-panel">
                <p>To get here, we sailed through the stunning Queen Charlotte Sound.</p>
                <p>Picton itself is small, but it's the gateway to Marlborough—New Zealand's premier wine region. Sauvignon Blanc country, with rolling hills that glow golden in the afternoon light.</p>
            </div>

            ${generateGallery('picton')}
        `,
        fullDesc: "To get here, we sailed through the stunning Queen Charlotte Sound.\n\nPicton itself is small, but it's the gateway to Marlborough-New Zealand's premier wine region. Sauvignon Blanc country, with rolling hills that glow golden in the afternoon light.",
        image: "./images/hero/picton/IMG_20140106_093426.jpg"
    },
    {
        id: 16,
        title: "Napier, New Zealand",
        coords: [-39.4928, 176.9120],
        tag: "Classic Cars",
        icon: "🚗",
        isDoor: false,
        tag: "🎵 Original Song",
        useRichContent: true,
        richContent: `
        <div class="song-panel">
            <div class="song-status">
                <span class="status-label">Original Song</span>
                <span class="status-text">Coming Soon</span>
            </div>

            <div class="story-section-panel">
                <h3>Reserved for Music</h3>
                <p>This location has been set aside for an original song. The music is being written as a tribute to this place and the memories it holds.</p>
                <p><strong>Mood:</strong> Vintage / Hopeful</p>
                <p><strong>Theme:</strong> Art Deco dreams, rising from rubble, time capsules</p>
            </div>

            <div class="lyrics-section" onclick="this.classList.toggle('expanded')">
                <div class="lyrics-header">
                    <span class="lyrics-title">
                        <span class="lyrics-icon">📝</span>
                        <span>Lyrics</span>
                    </span>
                    <span class="lyrics-toggle">▼</span>
                </div>
                <div class="lyrics-content">
                    <div class="lyrics-text">
<span class="verse-label">Coming Soon</span>

Lyrics will appear here when the song is complete.

This space is reserved for "Napier, New Zealand" -
an original composition inspired by this place.
                    </div>
                </div>
            </div>

            <div class="audio-player-container">
                <p style="text-align: center; font-size: 0.85rem; color: rgba(245,240,232,0.6); margin: 0;">
                    🎵 Audio player will appear when song is released
                </p>
            </div>
        </div>`,
        fullDesc: "Napier is famous for its Art Deco architecture, rebuilt after an earthquake in 1931.\n\nWalking these streets feels like stepping back into the Great Gatsby era. Classic cars line the boulevards. The whole town is a time capsule.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769816605/Napier_ktolwj.jpg"
    },
    {
        id: 130,
        title: "Dunedin, New Zealand",
        coords: [-45.8788, 170.5028],
        tag: "Scottish Heritage",
        icon: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        isDoor: false,
        shortDesc: "New Zealand's Edinburgh - Victorian grandeur at the bottom of the world.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">Port Chalmers</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
                    <span class="demo-value">Scottish Settlement</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏛️</span>
                    <span class="demo-value">Victorian Architecture</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Sailing In</span>
                <h3 class="section-title-panel">The Otago Peninsula</h3>
                <p>The approach to Dunedin takes you through some of New Zealand's most dramatic coastal scenery. The Otago Peninsula rises from the sea in sheer volcanic cliffs, home to royal albatross, yellow-eyed penguins, and fur seals.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770836788/shiplife/dunedin/x7ibk9epxhahoj1t2n7g.jpg" class="story-image" data-caption="The dramatic cliffs of the Otago Peninsula." alt="Otago Peninsula cliffs">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770836785/shiplife/dunedin/nrh6ouaaqu23xvzruaao.jpg" class="story-image" data-caption="Volcanic cliffs rising from the sea." alt="Peninsula cliffs with boat">
                </div>
                <p class="photo-caption-inline">The volcanic cliffs of the Otago Peninsula. Small boats navigate the waters below.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Edinburgh of the South</span>
                <h3 class="section-title-panel">Gold Rush Grandeur</h3>
                <p>Dunedin was once New Zealand's wealthiest and most populous city, built on gold rush riches in the 1860s.</p>
                <p>The Scottish settlers left their mark everywhere - in the architecture, the street names, even the name itself (Dunedin is the Gaelic name for Edinburgh). Victorian and Edwardian buildings line the streets, preserved because the gold ran out before anyone could afford to tear them down.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770836773/shiplife/dunedin/xtvh4ezfveaxonxm1is5.jpg" class="story-image" data-caption="Victorian Dunedin with the harbor beyond." alt="Dunedin town view">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770836757/shiplife/dunedin/tbqhft210vpo8s7uizav.jpg" class="story-image" data-caption="The town under misty Otago skies." alt="Dunedin with church spire">
                </div>
                <p class="photo-caption-inline">Port Chalmers' Victorian architecture, with church spires rising against the misty Otago hills.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1770836769/shiplife/dunedin/fmmf2a13jra1ozt6fm3b.jpg" class="story-image" data-caption="The Gothic stone church of Port Chalmers." alt="Gothic church">
                <p class="photo-caption-inline">The Gothic stone church, a reminder of the Scottish settlers who built this town.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Port Chalmers</span>
                <h3 class="section-title-panel">Where Ships Come In</h3>
                <p>Cruise ships dock at Port Chalmers, a working harbor town about 15 minutes from Dunedin proper. Tour buses line up at the pier, ready to shuttle passengers to the city's attractions.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1770836768/shiplife/dunedin/tflscifiyxxzerg6bbk3.jpg" class="story-image" data-caption="The cruise terminal at Port Chalmers." alt="Cruise port with tugboat">
                <p class="photo-caption-inline">Tugboat in the harbor, tour buses waiting on the pier. The cruise terminal nestled beneath the green hills.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770836782/shiplife/dunedin/i6kklt76xhh05dafr7qh.jpg" class="story-image" data-caption="The working port with shipping containers." alt="Container port">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770836783/shiplife/dunedin/xsco0vd0kgzyvp45gj6t.jpg" class="story-image" data-caption="Misty hills above the harbor." alt="Harbor with hills">
                </div>
                <p class="photo-caption-inline">Port Chalmers is a working harbor. Shipping containers stack up beside the cruise berths.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1770836769/shiplife/dunedin/euakzrsgxmxao5jog87d.jpg" class="story-image" data-caption="A Princess ship in port - we weren't the only ones visiting." alt="Princess cruise ship">
                <p class="photo-caption-inline">We weren't the only ship visiting that day. A Princess-class ship gleamed beside us.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Exploring</span>
                <h3 class="section-title-panel">The Botanic Garden</h3>
                <p>Dunedin's Botanic Garden is the oldest in New Zealand, established in 1863. On an overcast day, the formal gardens offered a peaceful escape from the bustle of the ship.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1770836784/shiplife/dunedin/fi3a3weze0bhyp684pgl.jpg" class="story-image" data-caption="The formal gardens with their sculptural centerpiece." alt="Dunedin Botanic Garden">
                <p class="photo-caption-inline">The formal flower beds in full bloom. Even under grey skies, the colors were brilliant.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about Dunedin</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
                        <span>Scottish New Zealand</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Steepest Street:</strong> Baldwin Street was once recognized as the world's steepest residential street.</li>
                        <li><strong>Wildlife:</strong> The Otago Peninsula is home to royal albatross, yellow-eyed penguins, and fur seals.</li>
                        <li><strong>University Town:</strong> The University of Otago (1869) is New Zealand's oldest university.</li>
                        <li><strong>Cadbury:</strong> Dunedin was home to New Zealand's Cadbury chocolate factory for over 80 years.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('dunedin')}
        `,
        fullDesc: "Dunedin was once New Zealand's wealthiest and most populous city, built on gold rush riches in the 1860s.\n\nThe Scottish settlers left their mark everywhere - in the architecture, the street names, even the name itself. Victorian and Edwardian buildings line the streets, preserved because the gold ran out before anyone could afford to tear them down.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_auto,f_auto/v1770836788/shiplife/dunedin/m2vmx2aafazfowoddqfa.jpg"
    },
    {
        id: 18,
        title: "Tonga",
        coords: [-21.1393, -175.2018],
        tag: "The King's Palace",
        icon: "🏰",
        isDoor: false,
        shortDesc: "Kingdom of Tonga.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">Nuku'alofa</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🚢</span>
                    <span class="demo-value">Pacific Pearl</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">👑</span>
                    <span class="demo-value">Kingdom</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Drive</span>
                <h3 class="section-title-panel">Shore Leave</h3>
                <p>We took advantage of shore leave and headed inland.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_auto,f_auto/v1770838433/shiplife/tonga/aielbng94fsgzye6bbdv.jpg" class="story-image" alt="Tonga">
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770838420/shiplife/tonga/cbzlnct4qvducquqveql.jpg" class="story-image" alt="Tonga">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770838432/shiplife/tonga/cvrqbhs9l5d7zbzntjdg.jpg" class="story-image" alt="Tonga">
                </div>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770838422/shiplife/tonga/kl9ouncqasywt6sus1pm.jpg" class="story-image" alt="Tonga">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770838434/shiplife/tonga/nhbayjavdf3xnbfu9q9d.jpg" class="story-image" alt="Tonga">
                </div>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_auto,f_auto/v1770838423/shiplife/tonga/nnly70dtjigyrgor8ezl.jpg" class="story-image" alt="Tonga">
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770838431/shiplife/tonga/nwzmh0zgpkn1vcfsxwbg.jpg" class="story-image" alt="Tonga">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770838427/shiplife/tonga/s8yoso8jecurtiraciry.jpg" class="story-image" alt="Tonga">
                </div>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770838430/shiplife/tonga/scnkke4rgh896lkith62.jpg" class="story-image" alt="Tonga">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770838428/shiplife/tonga/vn2oy9aff4ohai3ezspl.jpg" class="story-image" alt="World signpost">
                </div>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_auto,f_auto/v1770838426/shiplife/tonga/vu1ebmhax6tsdxacngxy.jpg" class="story-image" alt="Tonga">
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Show</span>
                <h3 class="section-title-panel">Polynesian Culture</h3>
                <p>A Polynesian show and local cuisine.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_auto,f_auto/v1770838429/shiplife/tonga/bbw7mkjkjwg6vnfsr8rs.jpg" class="story-image" alt="Polynesian show">
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770838424/shiplife/tonga/cabzj35msernktmcz0te.jpg" class="story-image" alt="Polynesian show">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770838421/shiplife/tonga/g971pobihvgf2wnnhikq.jpg" class="story-image" alt="Local cuisine">
                </div>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_auto,f_auto/v1770838425/shiplife/tonga/y9fef2mveqsktdflb1au.jpg" class="story-image" alt="Tonga">
            </div>

            ${generateGallery('tonga')}
        `,
        fullDesc: "We took advantage of shore leave for a Polynesian show and local cuisine.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1770838429/shiplife/tonga/bbw7mkjkjwg6vnfsr8rs.jpg"
    },
    {
        id: 19,
        title: "Bora Bora",
        coords: [-16.5004, -151.7415],
        tag: "Jetski Paradise",
        icon: "🚤",
        isDoor: false,
        shortDesc: "The pearl of the Pacific.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">French Polynesia</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🚢</span>
                    <span class="demo-value">Pacific Pearl</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">⛰️</span>
                    <span class="demo-value">Mount Otemanu</span>
                </div>
            </div>

            <div class="story-section-panel">
                <p>The water here is a color I didn't know existed.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_auto,f_auto/v1770764155/bora_bora_baby.jpg" class="story-image" alt="Mount Otemanu">
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770764142/off_the_main_island_bora_bora_-_Copy.jpg" class="story-image" alt="Off the main island">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770764143/bora_bora_beach_-_Copy.jpg" class="story-image" alt="Bora Bora beach">
                </div>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_auto,f_auto/v1770764108/098.jpg" class="story-image" alt="Bora Bora">
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770764111/046.jpg" class="story-image" alt="Bora Bora">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770764114/054.jpg" class="story-image" alt="Bora Bora">
                </div>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770764114/063.jpg" class="story-image" alt="Bora Bora">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770764117/062.jpg" class="story-image" alt="Bora Bora">
                </div>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_auto,f_auto/v1770764118/065.jpg" class="story-image" alt="Bora Bora">
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770764119/079.jpg" class="story-image" alt="Bora Bora">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770764122/083.jpg" class="story-image" alt="Bora Bora">
                </div>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770764123/080.jpg" class="story-image" alt="Bora Bora">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770764128/100.jpg" class="story-image" alt="Bora Bora">
                </div>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_auto,f_auto/v1770764133/097.jpg" class="story-image" alt="Bora Bora">
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770764150/120.jpg" class="story-image" alt="Bora Bora">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770764107/me_and_mark.jpg" class="story-image" alt="Me and Mark">
                </div>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_auto,f_auto/v1770764109/038.jpg" class="story-image" alt="Waterfall hike">
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770764127/tahiti_waterfall.jpg" class="story-image" alt="Tahiti waterfall">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/v1770764145/grapefruit_and_apple.jpg" class="story-image" alt="Fresh fruit">
                </div>
                <p>The kind of day you remember forever.</p>
            </div>

            ${generateGallery('boraBora')}
        `,
        fullDesc: "The water here is a color I didn't know existed. The kind of day you remember forever.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1770764155/bora_bora_baby.jpg"
    },
    {
        id: 20,
        title: "Port Vila",
        coords: [-17.7333, 168.3273],
        tag: "The Cursed Maiden Voyage",
        icon: "🌀",
        isDoor: false,
        shortDesc: "Sandwiched between two cyclones. The night everything went wrong.",
        imagePosition: "center",
        imageCaption: "The morning after. That horizontal scratch runs right past where my cabin was.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">Vanuatu</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🚢</span>
                    <span class="demo-value">Pacific Pearl</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">📅</span>
                    <span class="demo-value">December 2010</span>
                </div>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The Setup</span>
                <h3 class="section-title-panel">Fresh Out of Dry Dock</h3>
                <p>The Pacific Pearl had just come out of a month-long refit in Singapore. All crew were onboard as we sailed her out of dry dock - a sweltering month of work with little to no air conditioning and plenty of alcohol for the musicians.</p>
                <p>I was about two years into my contracted life at sea by then. The ship was being transformed from Ocean Village into P&O Australia's newest vessel. New restaurants, new bars, new everything.</p>
                <p>Including a massive chandelier in the atrium.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The Chandelier</span>
                <h3 class="section-title-panel">We Watched Them Hang It</h3>
                <p>Me and another crew member watched them install that chandelier. A huge iron and steel structure, several hundred pounds, suspended three stories above the atrium floor.</p>
                <p>They didn't do any load testing. Nothing. They were rushing to get the old girl ready for launch.</p>
                <p>We joked that it wasn't going to last an entire cruise.</p>
                <p>On the maiden voyage out of Sydney, just hours after a massive party in the atrium - all the musicians jamming, passengers running around everywhere, champagne flowing - it fell.</p>
                <p>Three stories. Middle of the night. Crashed into the café area below.</p>
                <p>An hour earlier, we'd all been standing right under it.</p>
                <p>P&O's official statement said "the reassuring thing was that there were no passengers or crew anywhere near the area when it happened." Yeah - because it was 3 AM.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The Storm</span>
                <h3 class="section-title-panel">Sandwiched Between Two Cyclones</h3>
                <p>That was just the beginning.</p>
                <p>A bad storm hit on our first night out of Sydney. Then the captain made an announcement that would have been funny if it wasn't terrifying:</p>
                <p>We had somehow ended up sandwiched between two cyclones.</p>
                <p>The original itinerary - Isle of Pines, maybe Mystery Island - was scrapped. We were making an emergency overnight stop at Port Vila instead.</p>
                <p>The 2010-2011 South Pacific cyclone season was brutal. Cyclone Vania. Cyclone Yasi. Cyclone Atu. We were caught in the middle of all of it.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The Impact</span>
                <h3 class="section-title-panel">"You Were Lucky"</h3>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768966739/IMG_0357_uylflq.jpg" class="story-image" data-caption="Engineering crew hosing off the hull the morning after. My cabin was just below the last porthole on deck 5, right where the scratch begins." alt="Hull damage on Pacific Pearl">
                <p class="photo-caption-inline">The morning after. That horizontal scratch runs right past deck 5 - right past my cabin.</p>
                <p>The captain put the boat into the dock at Port Vila with enough force that it knocked me off my bed. I was changing my guitar strings at the time.</p>
                <p>When I stood up and got my bearings, I noticed two things:</p>
                <p>First, my floor had buckled upward.</p>
                <p>Second, there was a crack running all the way up my cabin wall. Through that crack, I could see what looked like the hull of the ship.</p>
                <p>For a few days after that, I was famous. The staff captain, head engineer - and it felt like all 700 crew onboard - wanted to peek inside my cabin. After a while I just left my door open for a few days.</p>
                <p>Then I was moved temporarily to a passenger cabin while they made "repairs."</p>
                <p>I never did go back to that cabin. But my good friend Daryl Stevenette did a contract a year later on the Pearl - and the floor was still buckled. The bathroom door didn't quite shut right.</p>
                <p>The staff captain looked at me and said: "You were lucky."</p>
                <p>I could have been crushed by a cruise ship.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The Aftermath</span>
                <h3 class="section-title-panel">The Unluckiest Maiden Voyage</h3>
                <p>The Pacific Pearl's maiden voyage became legendary for all the wrong reasons:</p>
                <p>• Chandelier falls 3 stories (hours after party underneath)<br>
                • Caught between two cyclones<br>
                • Emergency diversion to Port Vila<br>
                • Hull damage during docking<br>
                • Medical evacuation near Great Barrier Island<br>
                • Non-flushing toilets<br>
                • No drinking water during the storm</p>
                <p>As crew, we were forbidden to talk about most of it. The chandelier incident especially.</p>
                <p>But the ship no longer exists. P&O Australia no longer exists. And this is my story to tell.</p>
            </div>
            
            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about this incident</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🌀</span>
                        <span>The Cursed Maiden Voyage</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>The Ship:</strong> Pacific Pearl was formerly Ocean Village, refitted in Singapore in late 2010 at Sembawang Shipyard.</li>
                        <li><strong>Maiden Voyage:</strong> December 22, 2010, from Auckland.</li>
                        <li><strong>The Cyclones:</strong> The 2010-11 South Pacific cyclone season included Vania (Jan 12-13), Yasi (Jan 30), and Atu (Feb 21).</li>
                        <li><strong>Confirmed:</strong> The chandelier incident was reported by Cruise Compare: "a large 3 metre wide chandelier fell through the ships open atrium three storeys down."</li>
                        <li><strong>Ship's Fate:</strong> Pacific Pearl was sold in 2017, renamed Columbus, and later scrapped after CMV went into administration in 2020.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('portVila')}
        `,
        fullDesc: "Port Vila was supposed to be Isle of Pines. But when you're sandwiched between two cyclones on the maiden voyage of the Pacific Pearl - a voyage already marked by a falling chandelier - you take whatever safe harbor you can get. The captain docked with enough force to crack my cabin wall. The staff captain said I was lucky. I think I know what he meant.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768966739/IMG_0357_uylflq.jpg"
    },
    {
        id: 111,
        title: "New Caledonia",
        coords: [-22.2711, 166.4416],
        tag: "French Pacific",
        icon: "🇫🇷",
        isDoor: false,
        shortDesc: "France in the South Pacific.",
        imagePosition: "center",
        useRichContent: true,
        richContent: `
            <div class="story-section-panel">
                <p>New Caledonia is a surreal mashup of French culture and Pacific island life.</p>
                <p>Baguettes and lagoons. Cafés au lait and coral reefs. The Isle of Pines nearby is one of the most beautiful places I've ever seen.</p>
            </div>

            ${generateGallery('newCaledonia')}
        `,
        fullDesc: "New Caledonia is a surreal mashup of French culture and Pacific island life.\n\nBaguettes and lagoons. Cafés au lait and coral reefs. The Isle of Pines nearby is one of the most beautiful places I've ever seen.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769817595/resort_pool_noumea_m9dbcy.jpg"
    },
    {
        id: 117,
        title: "Lifou",
        coords: [-20.9167, 167.2833],
        tag: "The Guardian Spider",
        icon: "🕷️",
        isDoor: false,
        shortDesc: "A church on a hill, a spider in a fence, and the clearest water I've ever seen.",
        imagePosition: "center",
        imageCaption: "The church on Lifou. I climbed this hill more times than I can count.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">Loyalty Islands</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🇫🇷</span>
                    <span class="demo-value">New Caledonia</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🚢</span>
                    <span class="demo-value">P&O Australia</span>
                </div>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The Island</span>
                <h3 class="section-title-panel">Picture Perfect</h3>
                <p>Lifou was one of those places that felt like a secret. A tender port on the regular P&O rotation through the South Pacific - Nouméa, Isle of Pines, Port Vila, and here.</p>
                <p>On the far side of the island was a swimming and snorkeling spot with water so clear it barely looked real. The kind of place you'd see in a travel brochure and assume was photoshopped.</p>
                <p>But it was the church on the hill that kept drawing me back.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The Church</span>
                <h3 class="section-title-panel">Churches Older Than Any I'd Ever Entered</h3>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768963793/New_Caldonia_church_t4pfw4.jpg" class="story-image" data-caption="The church on Lifou - I visited this spot every time we called here." alt="Lifou church">
                <p class="photo-caption-inline">The church on Lifou. A quiet place at the top of a dusty road.</p>
                <p>Every time we called at Lifou, I'd make the climb up to this church. It became a ritual. The walk was hot and dusty, but there was something peaceful about that little building at the top of the hill.</p>
                <p>The Pacific run took us through places I'd only seen in documentaries. Turquoise water so clear you could count fish from the tender. Churches older than any building I'd ever entered. Islands where time moved differently.</p>
                <p>This was one of those churches.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The Spider</span>
                <h3 class="section-title-panel">My Little Landmark Friend</h3>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768963050/Screen_Shot_2026-01-20_at_9.35.22_PM_x1xnpi.png" class="story-image" data-caption="The guardian spider of Lifou." alt="Spider on Lifou">
                <p class="photo-caption-inline">The guardian of the path to the church.</p>
                <p>One day, walking up to the church, I noticed him. A spider - and not a small one - nestled in a wooden fence that separated someone's property from the road.</p>
                <p>He seemed almost like a pet. Just sitting there in his web, unbothered by the world passing by.</p>
                <p>After that, every time we visited Lifou, I'd look for him as I climbed up to the church. He became my little landmark. A familiar face - all eight eyes of it - on an island far from home.</p>
                <p>And then one visit, he was gone.</p>
                <p>I don't know what happened to him. Maybe he moved on. Maybe something got him. But I still looked for him every time after that, just in case.</p>
            </div>
            
            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about this location</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🏝️</span>
                        <span>Lifou</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Largest Loyalty Island:</strong> Lifou is the biggest of the Loyalty Islands, with about 10,000 residents.</li>
                        <li><strong>Raised Coral Atoll:</strong> The island is a former coral atoll, now raised above sea level. The interior is flat (an old lagoon) surrounded by limestone cliffs.</li>
                        <li><strong>Tender Port:</strong> No dock - cruise ships anchor offshore and passengers take lifeboats (tenders) to reach the island.</li>
                        <li><strong>French Territory:</strong> Part of New Caledonia, an overseas territory of France in the South Pacific.</li>
                        <li><strong>Six Tribes:</strong> Six of the 19 different tribes of the Loyalty Islands live on Lifou.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('lifou')}
        `,
        fullDesc: "Lifou was one of those places that felt like a secret. On the far side of the island was a swimming spot with water so clear it barely looked real. But it was the church on the hill that kept drawing me back - and the spider in the wooden fence who became my unlikely landmark friend.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768963793/New_Caldonia_church_t4pfw4.jpg"
    },
    {
        id: 24,
        title: "Falkland Islands",
        coords: [-51.7963, -59.5236],
        tag: "Contested Territory",
        icon: "🍺",
        isDoor: false,
        tag: "🎵 Original Song",
        useRichContent: true,
        richContent: `
        <div class="song-panel">
            <div class="song-status">
                <span class="status-label">Original Song</span>
                <span class="status-text">Coming Soon</span>
            </div>

            <div class="story-section-panel">
                <h3>Reserved for Music</h3>
                <p>This location has been set aside for an original song. The music is being written as a tribute to this place and the memories it holds.</p>
                <p><strong>Mood:</strong> Isolated / Resilient</p>
                <p><strong>Theme:</strong> Edge of the world, windswept, small communities</p>
            </div>

            <div class="lyrics-section" onclick="this.classList.toggle('expanded')">
                <div class="lyrics-header">
                    <span class="lyrics-title">
                        <span class="lyrics-icon">📝</span>
                        <span>Lyrics</span>
                    </span>
                    <span class="lyrics-toggle">▼</span>
                </div>
                <div class="lyrics-content">
                    <div class="lyrics-text">
<span class="verse-label">Coming Soon</span>

Lyrics will appear here when the song is complete.

This space is reserved for "Falkland Islands" -
an original composition inspired by this place.
                    </div>
                </div>
            </div>

            <div class="audio-player-container">
                <p style="text-align: center; font-size: 0.85rem; color: rgba(245,240,232,0.6); margin: 0;">
                    🎵 Audio player will appear when song is released
                </p>
            </div>
        </div>`,
        fullDesc: "We stopped here for half a day during rough seas. Had a beer in one of the pubs and listened to a friend tell me all of her woes.\n\nUnique, memorable, and exhausting.\n\nThe irony wasn't lost on me-just days earlier in Ushuaia, I'd been reading those passionate anti-British posters about this very place. Now here I was, having a pint on the disputed ground itself.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768951516/Screenshot_20260120_142328_Facebook_bcerw1.jpg"
    },
    {
        id: 25,
        title: "Milos, Greece",
        coords: [36.74, 24.42],
        tag: "Volcanic Beauty",
        icon: "🏛️",
        isDoor: false,
        shortDesc: "Where the Venus de Milo was found.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">🌋</span>
                    <span class="demo-value">Volcanic Island</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🛵</span>
                    <span class="demo-value">Scooter Day</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏛️</span>
                    <span class="demo-value">Venus de Milo</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏖️</span>
                    <span class="demo-value">Hidden Coves</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Early Start</span>
                <h3 class="section-title-panel">First Tender, First Freedom</h3>
                <p>We arrived early that morning, and I managed to catch the first tender ashore. No tour groups, no agenda. Just me and whatever the island had to offer.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/milos/img_3069" class="story-image" data-caption="The quiet harbor of Adamas in the early morning." alt="Milos harbor">
                <p class="photo-caption-inline">The harbor was still quiet. Sailboats bobbed at anchor. The day was mine.</p>
                <p>I grabbed a scooter from a rental place near the port and pointed it toward the interior. No map, no plan - just the roads and the volcanic landscape stretching ahead.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/milos/img_3071" class="story-image" data-caption="Flower-lined lanes through the village." alt="Village lane">
                <p class="photo-caption-inline">Flower-lined lanes led out of town and into the unknown.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Road</span>
                <h3 class="section-title-panel">Across the Volcanic Spine</h3>
                <p>Milos doesn't look like other Greek islands. The volcanic geology has created something different - a landscape of impossible colors, dramatic cliffs, and roads that wind through terrain that feels almost lunar.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/milos/img_3074" class="story-image" data-caption="The volcanic interior of Milos stretches to the sea." alt="Volcanic landscape">
                <p class="photo-caption-inline">From the heights, the entire island spread out - volcanic hills rolling down to impossibly blue water.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/milos/img_3123" class="story-image" data-caption="Dusty roads leading toward the sea." alt="Island road">
                <p class="photo-caption-inline">The roads were dusty and mostly empty. Perfect scooter territory.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/milos/img_3086" class="story-image" data-caption="Rural Milos - hay bales and volcanic hills." alt="Rural landscape">
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Colors</span>
                <h3 class="section-title-panel">Every Shade of Fire</h3>
                <p>The volcanic rock comes in colors that don't seem real - deep reds, bright whites, burnt oranges, all layered together like a geological painting. Ancient civilizations mined obsidian and sulfur from these hills for millennia.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/milos/img_3115" class="story-image" data-caption="Red and white volcanic rock formations." alt="Volcanic colors">
                <p class="photo-caption-inline">Red and white volcanic layers - the island's fiery origins on full display.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/milos/img_3118" class="story-image" data-caption="The volcanic palette of Milos." alt="Rock formations">
                <p class="photo-caption-inline">Every turn revealed new colors in the ancient rock.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Descent</span>
                <h3 class="section-title-panel">Finding the Cove</h3>
                <p>Then the road dropped toward the coast, and I saw it - red cliffs plunging into turquoise water, a small fishing village clinging to the shore, and a bay so perfect it looked staged.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/milos/img_3087" class="story-image" data-caption="First glimpse of the cove - red volcanic cliffs and turquoise water." alt="Cove view">
                <p class="photo-caption-inline">The first glimpse stopped me cold. Red cliffs, turquoise water, white buildings below.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/milos/img_3088" class="story-image" data-caption="The road descending to the fishing village." alt="Road to cove">
                <p class="photo-caption-inline">The road wound down through the red rock toward the water.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Moment</span>
                <h3 class="section-title-panel">The Most Beautiful Place</h3>
                <p>I parked the scooter and walked to the water's edge. People were swimming in water so clear you could count the pebbles on the bottom. The cliffs rose around me in every color. The fishing boats bobbed gently at anchor.</p>
                <p>I thought to myself: this might be the most beautiful place I've ever been.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/milos/img_3098" class="story-image" data-caption="The cove - possibly the most beautiful place I've ever been." alt="The cove">
                <p class="photo-caption-inline">The cove. Swimmers in crystal water. A place that felt like it shouldn't exist.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/milos/img_3089" class="story-image" data-caption="Crystal clear water between volcanic rocks." alt="Clear water">
                <p class="photo-caption-inline">The water was impossibly clear - turquoise fading to deep blue between the rocks.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/milos/img_3090" class="story-image" data-caption="Fishing boats in the colorful harbor." alt="Harbor boats">
                <p class="photo-caption-inline">Fishing boats floating in a harbor carved from volcanic cliffs.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Village</span>
                <h3 class="section-title-panel">White and Blue</h3>
                <p>The village chapel stood gleaming white against the volcanic backdrop - the classic Greek silhouette of dome and bell tower, but set against cliffs of red and gold instead of the usual brown rock.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/milos/img_3104" class="story-image" data-caption="Greek Orthodox chapel overlooking the bay." alt="Chapel with sea">
                <p class="photo-caption-inline">The chapel watched over the bay - white walls, blue trim, volcanic cliffs, turquoise sea.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/milos/img_3103" class="story-image" data-caption="Classic Cycladic architecture against the volcanic hills." alt="White chapel">
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Echoes</span>
                <h3 class="section-title-panel">Ancient Frames</h3>
                <p>On my way back, I stopped at ruins overlooking the sea - ancient stone doorways that now frame nothing but sky and water. In 1820, a farmer digging in his field here uncovered the Venus de Milo. She's in the Louvre now, far from these shores.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/milos/img_3094" class="story-image" data-caption="Ancient ruins framing the Aegean." alt="Stone ruins">
                <p class="photo-caption-inline">An ancient doorway framing the sea - still standing after millennia.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/milos/img_3113" class="story-image" data-caption="The volcanic coastline stretches into the distance." alt="Coastline">
                <p class="photo-caption-inline">The volcanic coastline stretched on forever. And somewhere, my ship was waiting.</p>
            </div>

            ${generateGallery('milos')}
        `,
        fullDesc: "We arrived early and I caught the first tender ashore. I grabbed a scooter and spent the day exploring the volcanic island alone - dusty roads, impossible colors, and a cove that might be the most beautiful place I've ever seen.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/milos/img_3098"
    },
    {
        id: 41,
        title: "Santorini, Greece",
        coords: [36.39, 25.46],
        tag: "Iconic Caldera",
        icon: "🏛️",
        isDoor: false,
        shortDesc: "The postcard of the Aegean.",
        imagePosition: "center",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">🌋</span>
                    <span class="demo-value">Volcanic Caldera</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🚢</span>
                    <span class="demo-value">Multiple Visits</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏛️</span>
                    <span class="demo-value">Fira & Oia</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🌅</span>
                    <span class="demo-value">Famous Sunsets</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Approach</span>
                <h3 class="section-title-panel">Into the Caldera</h3>
                <p>Santorini doesn't sneak up on you. You see the volcanic cliffs from miles away, the white villages clinging impossibly to the rim.</p>
                <p>Sailing into the caldera - the flooded crater of an ancient volcanic explosion - you understand why this place has captured imaginations for millennia. Some say the legend of Atlantis began here.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/santorini/dhdiad1fxklbqpblt03u.jpg" class="story-image" data-caption="Sailing into Santorini's caldera - ships gather beneath the volcanic cliffs." alt="Ships in Santorini caldera">
                <p class="photo-caption-inline">Sailing into Santorini's caldera. The volcanic cliffs rise dramatically from the deep blue water.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The View</span>
                <h3 class="section-title-panel">The Postcard Made Real</h3>
                <p>There's a reason Santorini is on every Greece travel poster. The white-washed buildings. The blue domes. The impossible blue of the Aegean below.</p>
                <div class="image-row image-row-2">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/santorini/img_3511" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/santorini/img_3511" data-caption="Fira cascading down the volcanic cliffs" alt="Fira town view">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/santorini/img_3466" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/santorini/img_3466" data-caption="The caldera with Nea Kameni beyond" alt="Caldera view">
                </div>
                <p class="photo-caption-inline">Left: Fira cascading down the volcanic cliffs to the old port. Right: The flooded caldera with Nea Kameni - the volcano still growing.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/santorini/img_3470" class="story-image" data-caption="White domes cascading down to the caldera." alt="White domes and caldera">
                <p class="photo-caption-inline">Domes upon domes, terraces upon terraces - the classic view that launched a thousand postcards.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Old Port</span>
                <h3 class="section-title-panel">Getting Ashore</h3>
                <p>Before the cable car, the only way up from the old port was by donkey. The stone steps still wind up the cliff face, carved by centuries of hooves and feet.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/santorini/w4dpnl8gzx2ibhllyd6z.jpg" class="story-image" data-caption="The old port below the cliffs - traditional boats still ferry passengers." alt="Old port with boat">
                <p class="photo-caption-inline">The old port nestled below the cliffs. Traditional boats still ferry passengers from ships at anchor.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/santorini/img_3525" class="story-image" data-caption="The famous Santorini donkeys - still carrying passengers up 588 steps." alt="Santorini donkeys">
                <p class="photo-caption-inline">The famous donkeys of Santorini - still carrying passengers up 588 steps from the old port. Some things haven't changed in centuries.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/santorini/fak4vfvkzksog9onloyy.jpg" class="story-image" data-caption="Houses carved directly into the volcanic rock." alt="Cliff houses">
                <p class="photo-caption-inline">Houses carved directly into the volcanic rock. Living with the volcano, not against it.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Fira</span>
                <h3 class="section-title-panel">The Main Town</h3>
                <p>Fira is the capital - perched on the caldera rim, full of shops, restaurants, and the relentless flow of tourists. But step off the main path and you find quiet corners.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/santorini/gcxwoaxhvwtwhzfgzmjg.jpg" class="story-image" data-caption="A quiet courtyard - the Greek arch framing traditional architecture." alt="Greek courtyard">
                <p class="photo-caption-inline">A quiet courtyard off the main path. The Greek arch. The terracotta pots. The whitewash.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/santorini/img_3496" class="story-image" data-caption="The Catholic Cathedral's pink tower beside a white Orthodox dome." alt="Church towers">
                <p class="photo-caption-inline">The Catholic Cathedral's pink bell tower beside a white Orthodox dome - two faiths sharing the clifftop for centuries.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/santorini/vxllo2hmxhpjwybu9tmm.jpg" class="story-image" data-caption="Hotel Atlantis - classic Cycladic architecture in brilliant white." alt="Hotel Atlantis">
                <p class="photo-caption-inline">Hotel Atlantis. The name seems appropriate for an island that may have inspired the legend.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Details</span>
                <h3 class="section-title-panel">Colors of the Island</h3>
                <p>Santorini is more than white and blue. The bougainvillea. The red geraniums. The ochre and terracotta accents against the volcanic stone.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/santorini/lykhhj6krfmt7jzg9bwx.jpg" class="story-image" data-caption="Red geraniums against the white - color everywhere." alt="Red flowers with white building">
                <p class="photo-caption-inline">The red geraniums against the white. Color punctuating every corner.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/santorini/yuytj8wd6vznwvuhrtkr.jpg" class="story-image" data-caption="Restaurants perched on the caldera rim - dining with the view." alt="Caldera restaurants">
                <p class="photo-caption-inline">Restaurants perched on the caldera rim. The bougainvillea. The endless blue beyond. This is why people come here.</p>
            </div>

            ${generateGallery('santorini', 'Photos from Santorini')}
        `,
        fullDesc: "Santorini needs no introduction.\n\nThe white-washed buildings cascading down volcanic cliffs, the blue domes, the sunsets that stop you in your tracks. It's touristy for a reason-some places really are as beautiful as the postcards suggest. Watching the sun sink into the caldera from Oia is something I'll never forget.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/santorini/eu9npl4slyyyfpepxksz.jpg"
    },
    {
        id: 132,
        title: "Symi, Greece",
        coords: [36.62, 27.84],
        tag: "Painted Harbor",
        icon: "🎨",
        isDoor: false,
        shortDesc: "Neoclassical houses cascade down to the harbor.",
        imagePosition: "center",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item"><span class="demo-icon">📍</span> Dodecanese Islands</div>
                <div class="demo-item"><span class="demo-icon">👥</span> Pop: 2,600</div>
                <div class="demo-item"><span class="demo-icon">🧽</span> Sponge Diving</div>
                <div class="demo-item"><span class="demo-icon">🎨</span> Neoclassical</div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Harbor</span>
                <h3 class="section-title-panel">Gialos - A Painted Amphitheater</h3>
                <p>Symi is what happens when an island decides to be beautiful on purpose. The neoclassical mansions in shades of ochre, terracotta, and pastel climb the hillsides around the harbor of Gialos. Once the sponge-diving capital of the Aegean, the island's wealth built these elegant houses.</p>
                <div class="image-row image-row-5">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/symi/img_5786" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/symi/img_5786" data-caption="The colorful harbor" alt="Harbor view">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/symi/img_5787" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/symi/img_5787" data-caption="Neoclassical facades" alt="Facades">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/symi/img_5791" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/symi/img_5791" data-caption="Reflections in the harbor" alt="Reflections">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/symi/img_5792" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/symi/img_5792" data-caption="Pastel houses" alt="Pastel houses">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/symi/img_5793" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/symi/img_5793" data-caption="Symi's waterfront" alt="Waterfront">
                </div>
                <p class="photo-caption-inline">Now perfectly preserved, reflecting in the still harbor waters.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Exploring</span>
                <h3 class="section-title-panel">Up the 500 Steps</h3>
                <p>Away from the day-trippers who arrive from Rhodes, the upper town of Chorio rewards those who climb its 500 steps with narrow lanes, Byzantine churches, and views that stretch to Turkey.</p>
                <div class="image-row image-row-5">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/symi/img_5796" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/symi/img_5796" data-caption="Views from above" alt="Upper town view">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/symi/img_5797" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/symi/img_5797" data-caption="Climbing to Chorio" alt="Chorio">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/symi/img_5799" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/symi/img_5799" data-caption="Island details" alt="Details">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/symi/img_5800" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/symi/img_5800" data-caption="Aegean blues" alt="Aegean">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/symi/img_5801" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/symi/img_5801" data-caption="Symi memories" alt="Symi">
                </div>
                <p class="photo-caption-inline">A gem of the Dodecanese, just a stone's throw from Turkey.</p>
            </div>

            <p class="more-info-toggle" onclick="this.nextElementSibling.classList.toggle('expanded'); this.textContent = this.nextElementSibling.classList.contains('expanded') ? '− Less about Symi' : '+ More about Symi'">+ More about Symi</p>
            <div class="more-info-content">
                <p>Symi's prosperity came from sponge diving and shipbuilding. At its peak in the early 20th century, the island had a population of 25,000—ten times today's number. The Italian occupation and the decline of the sponge trade led to emigration, but left the architecture frozen in time.</p>
                <p>The Monastery of Panormitis, on the island's southern tip, is one of the most important pilgrimage sites in the Dodecanese, dedicated to the Archangel Michael.</p>
            </div>

            ${generateGallery('symi')}
        `,
        fullDesc: "Symi is what happens when an island decides to be beautiful on purpose.\n\nThe neoclassical mansions in shades of ochre, terracotta, and pastel climb the hillsides around the harbor of Gialos. Once the sponge-diving capital of the Aegean, the island's wealth built these elegant houses. Now they're perfectly preserved, reflecting in the still harbor waters.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/symi/img_5795"
    },
    {
        id: 140,
        title: "Patmos, Greece",
        coords: [37.32, 26.55],
        tag: "Island of the Apocalypse",
        icon: "📜",
        isDoor: false,
        shortDesc: "Where John wrote Revelation - and where I found the perfect pasta.",
        imagePosition: "center",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item"><span class="demo-icon">📍</span> Dodecanese Islands</div>
                <div class="demo-item"><span class="demo-icon">👥</span> Pop: 3,000</div>
                <div class="demo-item"><span class="demo-icon">📜</span> UNESCO Site</div>
                <div class="demo-item"><span class="demo-icon">🛵</span> Scooter Required</div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">September 2013</span>
                <h3 class="section-title-panel">A Mission: Find Pasta</h3>
                <p>Some people come to Patmos for spiritual reasons. The island where Saint John the Theologian received the visions that became the Book of Revelation draws pilgrims from around the world. The Cave of the Apocalypse, the Monastery of St. John crowning the hill - sacred ground.</p>
                <p>I came for pasta.</p>
                <p>Not that I'm irreverent. But when you've got limited time in port and the ship's been at sea for days, sometimes the soul craves something specific. Fresh pasta with tomatoes and feta, ideally with a view of the Aegean. That was my mission.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/patmos/img_20130911_121433" class="story-image" data-caption="The view from above Skala" alt="Skala port view">
                <p class="photo-caption-inline">The view from above Skala - our ship at anchor in waters where apostles once sailed.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Scooter</span>
                <h3 class="section-title-panel">Two Wheels and Dusty Roads</h3>
                <p>The only way to properly explore a Greek island is on two wheels. I found a scooter rental near the port and took off up the winding roads, determined to see as much of Patmos as possible before finding my lunch.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1000,q_auto,f_auto/shiplife/patmos/pano_20130911_131604" class="story-image" data-caption="The view from my scooter" alt="Scooter POV">
                <p class="photo-caption-inline">My shadow and the handlebars - dusty roads leading somewhere delicious.</p>
                <p>The roads on Patmos are narrow and sun-bleached, winding through hills covered in wild herbs. Every turn revealed another postcard view - white villages against blue sky, the monastery watching from above, fishing boats dotted in coves below.</p>
                <div class="image-row image-row-3">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/patmos/img_20130911_122138" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/patmos/img_20130911_122138" data-caption="Stopped to take in the view" alt="Panoramic view">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/patmos/img_20130911_122115" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/patmos/img_20130911_122115" data-caption="The bay spread out below" alt="Bay view">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/patmos/img_3421" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/patmos/img_3421" data-caption="The fishing harbor" alt="Fishing harbor">
                </div>
                <p class="photo-caption-inline">Pulled over constantly - too beautiful not to stop.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Sacred Ground</span>
                <h3 class="section-title-panel">The Island of Revelation</h3>
                <p>Around 95 AD, the Roman Emperor Domitian exiled John the Apostle to this tiny island. In a cave halfway up the mountain, John received his apocalyptic visions - the Four Horsemen, the Seven Seals, the New Jerusalem. The Book of Revelation was born here.</p>
                <p>The Monastery of Saint John the Theologian was built in 1088 and still dominates the island's skyline. Visible from almost anywhere on Patmos, its gray fortress walls house Byzantine treasures and a library of ancient manuscripts.</p>
                <div class="image-row image-row-3">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/patmos/img_20130913_125543" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/patmos/img_20130913_125543" data-caption="Bell tower against blue sky" alt="Church bell tower">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/patmos/img_3416" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/patmos/img_3416" data-caption="The bells of Patmos" alt="Church bells">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/patmos/img_3429" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/patmos/img_3429" data-caption="The monastery on the hill" alt="Monastery view">
                </div>
                <p class="photo-caption-inline">Over 300 churches serve 3,000 residents - Patmos takes its faith seriously.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Wandering</span>
                <h3 class="section-title-panel">The Lanes of Skala</h3>
                <p>Back in the port town of Skala, I parked the scooter and wandered. Whitewashed buildings, stone arches, bougainvillea dripping from every wall. The lanes are designed for shade - vine-covered tunnels that keep the worst of the midday sun at bay.</p>
                <div class="image-row image-row-4">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/patmos/img_3415" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/patmos/img_3415" data-caption="The main square" alt="Town square">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/patmos/img_3418" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/patmos/img_3418" data-caption="Stone arches" alt="Arched colonnade">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/patmos/img_3420" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/patmos/img_3420" data-caption="Vine tunnel" alt="Vine pathway">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/patmos/img_3423" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/patmos/img_3423" data-caption="Another shaded lane" alt="Vine archway">
                </div>
                <p class="photo-caption-inline">The Greeks mastered shade architecture centuries ago.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/patmos/img_20130913_141319" class="story-image" data-caption="Local residents" alt="Geese in square">
                <p class="photo-caption-inline">Even the geese seem unhurried. Nothing moves fast on the Island of the Apocalypse.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Reward</span>
                <h3 class="section-title-panel">Mission Accomplished</h3>
                <p>Finally, at a trattoria near the harbor, I found what I'd been searching for. A table with a view of the bay, the monastery visible on the hill, and a plate of fresh spaghetti with tomatoes and local feta arriving with a smile.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/patmos/img_3431" class="story-image" data-caption="The perfect pasta" alt="Fresh pasta">
                <p class="photo-caption-inline">Worth every dusty mile. Fresh spaghetti with tomatoes and feta - simple, perfect, Patmos.</p>
                <p>Saint John had his visions in a cave. I had mine in a restaurant. His changed the world. Mine just made my day.</p>
            </div>

            <p class="more-info-toggle" onclick="this.nextElementSibling.classList.toggle('expanded'); this.textContent = this.nextElementSibling.classList.contains('expanded') ? '− Less about Patmos' : '+ More about Patmos'">+ More about Patmos</p>
            <div class="more-info-content">
                <p>Patmos has been a UNESCO World Heritage Site since 1999, recognized for the historic center of Chora, the Monastery of Saint John, and the Cave of the Apocalypse. The monastery's library contains over 13,000 books and manuscripts, including some of the oldest in the Orthodox world.</p>
                <p>The island remained relatively isolated for centuries, which preserved both its architecture and its contemplative atmosphere. Tourism exists, but Patmos retains a spiritual quality that sets it apart from more commercialized Greek islands.</p>
            </div>

            ${generateGallery('patmos')}
        `,
        fullDesc: "Some people come to Patmos for spiritual reasons - the island where Saint John received the visions that became the Book of Revelation. I came for pasta. Armed with a rented scooter, I explored the sacred island's dusty roads, whitewashed villages, and vine-shaded lanes until I found the perfect trattoria with a view of the monastery and a plate of fresh spaghetti.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,h_800,c_fill,g_south,q_80,f_auto/shiplife/patmos/img_20130911_122952"
    },
    {
        id: 26,
        title: "Piran, Slovenia",
        coords: [45.53, 13.57],
        tag: "Hidden Adriatic",
        icon: "⛵",
        isDoor: false,
        shortDesc: "Slovenia's tiny slice of coastline.",
        imagePosition: "center",
        imageCaption: "Piran's Venetian architecture along Slovenia's tiny coastline.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">🌊</span>
                    <span class="demo-value">47 km Coastline</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏛️</span>
                    <span class="demo-value">Venetian Heritage</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🐴</span>
                    <span class="demo-value">Lipizzan Horses</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">Adriatic Sea</span>
                </div>
            </div>

            <div class="story-section-panel">
                <h3 class="section-title-panel">The Jewel of the Coast</h3>
                <p>Slovenia has only 47 kilometers of coastline. Piran is the jewel of it.</p>
                <img class="story-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/piran/img_1778" alt="Piran waterfront" data-caption="Piran's waterfront - Venetian architecture meets the Adriatic.">
                <p>Venetian architecture, narrow winding streets, and none of the crowds of nearby Croatia. We walked the sea wall at sunset and watched the fishing boats come in. Perfect.</p>
                <img class="story-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/piran/img_1770" alt="Piran streets" data-caption="The narrow streets of Piran's old town.">
            </div>

            <div class="story-section-panel">
                <h3 class="section-title-panel">Tartini Square</h3>
                <p>The heart of Piran is Tartini Square, named for the famous Baroque violinist born here in 1692. The oval piazza is surrounded by elegant Venetian buildings, their facades painted in warm Mediterranean colors.</p>
                <img class="story-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/piran/img_1772" alt="Tartini Square" data-caption="Tartini Square - the elegant heart of Piran.">
                <p>From the square, we climbed to the Church of St. George for panoramic views over the terracotta rooftops to the sea beyond.</p>
                <img class="story-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/piran/img_1776" alt="View from St. George" data-caption="Views over Piran from the Church of St. George.">
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Shore Excursion</span>
                <h3 class="section-title-panel">Lipica Stud Farm</h3>
                <p>From the tender port, I took an excursion inland to Lipica - the birthplace of the famous Lipizzan horses. This historic stud farm has been breeding these magnificent white horses since 1580, making it one of the oldest in the world.</p>
                <p>The classical dressage performance was breathtaking - watching these powerful horses move with such grace and precision, performing movements that have been perfected over centuries.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768951532/Screenshot_20260120_141730_Facebook_kjfnuv.jpg" class="story-image" data-caption="The Lipizzan horses performing classical dressage at Lipica." alt="Lipizzan horse performance at Lipica">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768951532/Screenshot_20260120_141721_Facebook_zyavdi.jpg" class="story-image" data-caption="Lipica Stud Farm - home of the Lipizzan breed since 1580." alt="Lipica Stud Farm horse show">
                </div>
                <p class="photo-caption-inline">The famous Lipizzan horses at Lipica Stud Farm, birthplace of the breed.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about Piran</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">⛵</span>
                        <span>Slovenia's Hidden Gem</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Tiny Coastline:</strong> Slovenia has only 47 kilometers of Adriatic coastline - one of the shortest of any coastal country in the world.</li>
                        <li><strong>Venetian Heritage:</strong> Piran was under Venetian rule for over 500 years (1283-1797), leaving behind stunning architecture including the Church of St. George and Tartini Square.</li>
                        <li><strong>Giuseppe Tartini:</strong> The famous Baroque composer and violinist was born here in 1692. The main square bears his name and features his statue.</li>
                        <li><strong>Lipica Stud Farm:</strong> Just inland, the Lipica stud farm has been breeding the famous white Lipizzan horses since 1580 - one of the oldest stud farms in the world.</li>
                        <li><strong>Salt Pans:</strong> The nearby Sečovlje salt pans have been producing sea salt since the 14th century, using traditional methods still practiced today.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('piran')}
        `,
        fullDesc: "Slovenia has only 47 kilometers of coastline. Piran is the jewel of it.\n\nVenetian architecture, narrow winding streets, and none of the crowds of nearby Croatia. We walked the sea wall at sunset and watched the fishing boats come in. Perfect.\n\nFrom here I took an excursion to Lipica - the birthplace of the famous Lipizzan horses, breeding these magnificent white horses since 1580.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767734745/IMG_1778_fw5ihj.jpg"
    },
    {
        id: 27,
        title: "Kotor, Montenegro",
        coords: [42.42, 18.77],
        tag: "Fortress Walls",
        icon: "🏰",
        isDoor: false,
        shortDesc: "Medieval walls climbing impossible mountains.",
        imagePosition: "center",
        imageCaption: "The fortress walls climbing up the mountain behind Kotor's old town.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">👥</span>
                    <span class="demo-value">~1,000</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏛️</span>
                    <span class="demo-value">UNESCO Site</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">⛰️</span>
                    <span class="demo-value">1,350 Steps</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">Bay of Kotor</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Approach</span>
                <h3 class="section-title-panel">Fjord of the Adriatic</h3>
                <p>The fjord approach to Kotor is dramatic enough. The ship threads through narrow passages, mountains rising on both sides, villages clinging to the shoreline.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/kotor/IMG_1460" class="story-image" data-caption="Threading through the Bay of Kotor from the ship's bow." alt="Ship approaching Kotor">
                <p class="photo-caption-inline">The view from the bow as we thread through Europe's southernmost fjord.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/kotor/IMG_1427" class="story-image" data-caption="Morning mist on the Bay of Kotor." alt="Misty bay">
                <p class="photo-caption-inline">Morning light catches the mist rising off the water. Villages appear and disappear.</p>
                <p>Then you see the walls.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Arrival</span>
                <h3 class="section-title-panel">Docking at the Edge of History</h3>
                <p>The Seabourn ties up right at the waterfront, mountains towering on all sides. The old town is steps away. The fortress walls climb straight up the cliff behind it.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/kotor/IMG_2248" class="story-image" data-caption="Seabourn Odyssey docked in Kotor." alt="Seabourn at dock">
                <p class="photo-caption-inline">The Odyssey docked at Kotor's waterfront - mountains pressing in from all sides.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/kotor/IMG_2285" class="story-image" data-caption="The emerald moat and fortress walls." alt="Kotor moat">
                <p class="photo-caption-inline">The old city's moat - that water really is that green.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Old Town</span>
                <h3 class="section-title-panel">Medieval Perfection</h3>
                <p>Kotor's old town is a maze of narrow streets, hidden squares, and cats. So many cats. The Venetians built this place to last, and it has.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/kotor/IMG_2274" class="story-image" data-caption="A hidden square with palm tree and water pump." alt="Kotor square">
                <p class="photo-caption-inline">Turn a corner and find a quiet square with a palm tree and an ancient water pump.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/kotor/IMG_2262" class="story-image" data-caption="Courtyard with flowers in Kotor's old town." alt="Kotor courtyard">
                <p class="photo-caption-inline">Every courtyard is someone's garden. Flowers spill out of every window.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/kotor/IMG_2271" class="story-image" data-caption="Looking through a window frame to a house beyond." alt="Window frame view">
                <p class="photo-caption-inline">Frames within frames - centuries of history layered on top of each other.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Climb</span>
                <h3 class="section-title-panel">1,350 Steps to the Top</h3>
                <p>They climb straight up the mountain behind the old town - 1,350 steps to the fortress at the top. I made the climb. The view was worth every step.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/kotor/IMG_1652" class="story-image" data-caption="Church bell tower with the ship in the bay below." alt="Church tower and ship">
                <p class="photo-caption-inline">The Church of Our Lady of Remedy marks the halfway point. The ship already looks small.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/kotor/IMG_1687" class="story-image" data-caption="View through an arrow slit to the harbor below." alt="Arrow slit view">
                <p class="photo-caption-inline">Through an arrow slit - the same view defenders had centuries ago.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/kotor/IMG_1629" class="story-image" data-caption="Aerial view of Kotor's old town and harbor." alt="Kotor from above">
                <p class="photo-caption-inline">From near the top - orange rooftops, church domes, and ships in the bay.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/kotor/IMG_1722" class="story-image" data-caption="Victory at the top of Kotor's fortress." alt="At the summit">
                <p class="photo-caption-inline">Made it. 1,350 steps and worth every one.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Departure</span>
                <h3 class="section-title-panel">Sailing Out at Golden Hour</h3>
                <p>Leaving Kotor at sunset is almost as dramatic as arriving. The ship threads back through the narrow passages, golden light catching the mountains, the fortress walls fading into shadow.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/kotor/IMG_2622" class="story-image" data-caption="Sunset departure through the Bay of Kotor." alt="Sunset departure">
                <p class="photo-caption-inline">The view forward as we sail out - mountains silhouetted, clouds catching fire.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/kotor/IMG_2626" class="story-image" data-caption="Golden hour on the Bay of Kotor." alt="Golden hour bay">
                <p class="photo-caption-inline">Golden hour on the bay. A small boat races home. Another port, another memory.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about this location</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🏰</span>
                        <span>Pearl of the Adriatic</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Venetian Rule:</strong> Kotor was part of the Republic of Venice for nearly 400 years (1420-1797), which explains the Italian architectural influence.</li>
                        <li><strong>Earthquake Survivor:</strong> A devastating earthquake in 1979 damaged 90% of the old town. UNESCO helped fund the restoration.</li>
                        <li><strong>Cat Capital:</strong> Kotor is famous for its cats - they're everywhere in the old town, and there's even a Cat Museum.</li>
                        <li><strong>Fortress Walls:</strong> The walls are 4.5 km long and up to 20 meters high, built between the 9th and 18th centuries.</li>
                        <li><strong>Youngest Country:</strong> Montenegro only became independent in 2006, making it one of the world's newest nations.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('kotor')}
        `,
        fullDesc: "The fjord approach to Kotor is dramatic enough. Then you see the walls.\n\nThey climb straight up the mountain behind the old town-1,350 steps to the fortress at the top. I made the climb. The view was worth every step.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767735553/IMG_1717_ggcmyu.jpg"
    },
    {
        id: 28,
        title: "Syracuse, Sicily",
        coords: [37.07, 15.29],
        tag: "Ancient Greece in Italy",
        icon: "🏛️",
        isDoor: false,
        shortDesc: "Where Archimedes ran naked through the streets.",
        useRichContent: true,
        richContent: `
            <p>Syracuse was once the most powerful city in the Greek world - bigger than Athens.</p>
            <p>The ancient theater still hosts performances. The ear of Dionysius still echoes. And somewhere in these streets, Archimedes shouted 'Eureka!' and changed history.</p>

            ${generateGallery('syracuse')}
        `,
        fullDesc: "Syracuse was once the most powerful city in the Greek world-bigger than Athens.\n\nThe ancient theater still hosts performances. The ear of Dionysius still echoes. And somewhere in these streets, Archimedes shouted 'Eureka!' and changed history.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767735639/IMG_1240_swdpx7.jpg"
    },
    {
        id: 29,
        title: "Valletta, Malta",
        coords: [35.90, 14.51],
        tag: "Knights and Fortresses",
        icon: "⚓",
        isDoor: false,
        shortDesc: "The fortress island.",
        imagePosition: "center",
        imageCaption: "The Grand Harbour of Valletta.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">👥</span>
                    <span class="demo-value">~6,500</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏛️</span>
                    <span class="demo-value">UNESCO Site</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">⚔️</span>
                    <span class="demo-value">Knights of St. John</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">Mediterranean</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Fortress</span>
                <h3 class="section-title-panel">Knights and History</h3>
                <p>Malta sits at the crossroads of the Mediterranean. Everyone wanted it. The Knights of St. John held it.</p>
                <p>Valletta is built on a grid - unusual for a medieval city. The Grand Harbour is one of the most impressive approaches in the world. History seeps from every stone.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767735863/IMG_1155_qtda7b.jpg" class="story-image" alt="Malta Grand Harbour">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768951523/Screenshot_20260120_141946_Facebook_hakkap.jpg" class="story-image" alt="Malta view">
                </div>
                <p class="photo-caption-inline">The Grand Harbour and the fortress walls of Valletta.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Day Trip</span>
                <h3 class="section-title-panel">Gozo - Malta's Sister Island</h3>
                <p>A ferry ride from Malta brings you to Gozo - smaller, quieter, more rural. The Citadel rises above Victoria, and the churches here are some of the most ornate in the Mediterranean.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/gozo/20150606_103703" class="story-image" data-caption="The Citadel of Victoria, Gozo." alt="Gozo Citadel">
                <p class="photo-caption-inline">The Citadel panorama - fortified hilltop town watching over the island.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/gozo/20150606_103607" class="story-image" data-caption="Gozo architecture." alt="Gozo town">
                <p class="photo-caption-inline">Honey-colored limestone - the signature of Maltese architecture.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/gozo/20150606_104947" class="story-image" data-caption="Village street." alt="Village">
                <p class="photo-caption-inline">Village streets where time moves slower than on the mainland.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/gozo/20150606_105651" class="story-image" data-caption="Gozo scene." alt="Gozo">
                <p class="photo-caption-inline">The quieter pace of island life.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/gozo/20150606_110704" class="story-image" data-caption="Gozo view." alt="Gozo view">
                <p class="photo-caption-inline">Views across the Maltese archipelago.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Churches</span>
                <h3 class="section-title-panel">Baroque Splendor</h3>
                <p>Gozo's churches are astonishing - baroque interiors dripping with gold, painted domes, marble floors. The Maltese take their faith seriously, and it shows.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/gozo/20150606_1148390" class="story-image" data-caption="Church interior." alt="Church">
                <p class="photo-caption-inline">Stepping inside is like entering another world.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/gozo/20150606_115312" class="story-image" data-caption="Baroque altar and baldachin." alt="Altar">
                <p class="photo-caption-inline">The baldachin rises toward the painted dome - gold and marble and centuries of devotion.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/gozo/20150606_115325" class="story-image" data-caption="Church nave." alt="Church interior">
                <p class="photo-caption-inline">Every surface decorated, every detail considered.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/gozo/20150606_115822" class="story-image" data-caption="Ornate interior." alt="Church detail">
                <p class="photo-caption-inline">The checkered floor, the golden altar - baroque at its finest.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/gozo/20150607_133045" class="story-image" data-caption="Final church view." alt="Church">
                <p class="photo-caption-inline">Faith made visible in stone and gold.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about this location</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">⚔️</span>
                        <span>Fortress Island</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Knights Hospitaller:</strong> The Knights of St. John ruled Malta from 1530-1798, transforming it into an impregnable fortress.</li>
                        <li><strong>Great Siege:</strong> In 1565, 700 knights and 8,000 soldiers held off an Ottoman force of 40,000 for four months.</li>
                        <li><strong>Youngest Capital:</strong> Valletta was built from scratch starting in 1566 - Europe's first planned city since antiquity.</li>
                        <li><strong>WWII Hero:</strong> Malta was awarded the George Cross in 1942 for withstanding 3,000 bombing raids - the most bombed place on Earth.</li>
                        <li><strong>Filming Location:</strong> Malta has doubled for ancient Rome, King's Landing (Game of Thrones), and countless other films.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('malta')}
        `,
        fullDesc: "Malta sits at the crossroads of the Mediterranean. Everyone wanted it. The Knights of St. John held it.\n\nValletta is built on a grid-unusual for a medieval city. The Grand Harbour is one of the most impressive approaches in the world. History seeps from every stone.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767735863/IMG_1155_qtda7b.jpg"
    },
    {
        id: 30,
        title: "Tel Aviv, Israel",
        coords: [32.08, 34.78],
        tag: "Bauhaus by the Beach",
        icon: "🌅",
        isDoor: false,
        tag: "🎵 Original Song",
        useRichContent: true,
        richContent: `
        <div class="song-panel">
            <div class="song-status">
                <span class="status-label">Original Song</span>
                <span class="status-text">Coming Soon</span>
            </div>

            <div class="story-section-panel">
                <h3>Reserved for Music</h3>
                <p>This location has been set aside for an original song. The music is being written as a tribute to this place and the memories it holds.</p>
                <p><strong>Mood:</strong> Complex / Vibrant</p>
                <p><strong>Theme:</strong> Ancient and modern, Mediterranean nights, contested beauty</p>
            </div>

            <div class="lyrics-section" onclick="this.classList.toggle('expanded')">
                <div class="lyrics-header">
                    <span class="lyrics-title">
                        <span class="lyrics-icon">📝</span>
                        <span>Lyrics</span>
                    </span>
                    <span class="lyrics-toggle">▼</span>
                </div>
                <div class="lyrics-content">
                    <div class="lyrics-text">
<span class="verse-label">Coming Soon</span>

Lyrics will appear here when the song is complete.

This space is reserved for "Tel Aviv, Israel" -
an original composition inspired by this place.
                    </div>
                </div>
            </div>

            <div class="audio-player-container">
                <p style="text-align: center; font-size: 0.85rem; color: rgba(245,240,232,0.6); margin: 0;">
                    🎵 Audio player will appear when song is released
                </p>
            </div>
        </div>`,
        fullDesc: "Tel Aviv is two cities in one.\n\nThere's the White City-4,000 Bauhaus buildings, more than anywhere else on Earth. And there's the beach scene-surfboards, cafes, and a energy that doesn't stop when the sun goes down. The contrast with nearby Jerusalem couldn't be starker.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767735952/IMG_0854_wmukmp.jpg"
    },
    {
        id: 31,
        title: "Alexandria, Egypt",
        coords: [31.20, 29.92],
        tag: "Cleopatra's City",
        icon: "🐫",
        isDoor: false,
        shortDesc: "Where the ancient library once stood.",
        imagePosition: "center",
        imageCaption: "The Mediterranean corniche in Alexandria.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">👥</span>
                    <span class="demo-value">~5 Million</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">📜</span>
                    <span class="demo-value">Founded 331 BC</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏛️</span>
                    <span class="demo-value">Ancient Library</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">Mediterranean</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Ancient History</span>
                <h3 class="section-title-panel">Cleopatra's City</h3>
                <p>Alexandria was founded by Alexander the Great and ruled by Cleopatra. The famous lighthouse is gone. The library burned. But the city endures - chaotic, loud, and utterly captivating.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767736004/IMG_0687_znjvkv.jpg" class="story-image" alt="Alexandria corniche">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767736027/IMG_0655_vpe0lu.jpg" class="story-image" alt="Alexandria waterfront">
                </div>
                <p class="photo-caption-inline">The corniche and waterfront - where the ancient lighthouse once guided ships into harbor.</p>
                <p>Standing on the corniche, you feel the weight of all that history pushing up through the pavement.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about this location</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">📜</span>
                        <span>City of Knowledge</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Alexander's City:</strong> Founded in 331 BC by Alexander the Great, who never saw it completed - he died in Babylon at 32.</li>
                        <li><strong>The Great Library:</strong> Once held up to 400,000 scrolls - the largest collection of knowledge in the ancient world. Its destruction is history's greatest intellectual loss.</li>
                        <li><strong>Lighthouse Wonder:</strong> The Pharos Lighthouse was one of the Seven Wonders of the Ancient World, standing over 100 meters tall for 1,500 years.</li>
                        <li><strong>Cleopatra's Capital:</strong> The last active ruler of the Ptolemaic Kingdom, Cleopatra VII, made Alexandria her seat of power until 30 BC.</li>
                        <li><strong>Modern Library:</strong> The Bibliotheca Alexandrina opened in 2002 - a revival of the ancient library, holding millions of books.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('alexandria')}
        `,
        fullDesc: "Alexandria was founded by Alexander the Great and ruled by Cleopatra.\n\nThe famous lighthouse is gone. The library burned. But the city endures-chaotic, loud, and utterly captivating. Standing on the corniche, you feel the weight of all that history pushing up through the pavement.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767736004/IMG_0687_znjvkv.jpg"
    },
    {
        id: 32,
        title: "Mumbai, India",
        coords: [19.08, 72.88],
        tag: "Gateway to India",
        icon: "🕌",
        isDoor: false,
        shortDesc: "Sensory overload in the best way.",
        fullDesc: "Nothing prepares you for Mumbai.\n\nThe crowds. The colors. The sounds. The smells. It's overwhelming and exhilarating all at once. We visited the Gateway of India at sunset and watched the city come alive. Bollywood dreams and colonial grandeur, street food and skyscrapers-all crammed together.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767736180/IMG_0914_u5kskn.jpg"
    },
        {
        id: 33,
        title: "South Georgia",
        coords: [-54.25, -36.75],
        tag: "The Edge of the World",
        icon: "🐧",
        isDoor: false,
        shortDesc: "Where Shackleton rests. Where nature reclaims.",
        imagePosition: "center",
        imageCaption: "The whale catcher Petrel, now home to elephant seals.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">54°S, 36°W</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">👥</span>
                    <span class="demo-value">~30 residents</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🐧</span>
                    <span class="demo-value">Millions of Penguins</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🚢</span>
                    <span class="demo-value">Seabourn Quest</span>
                </div>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The Approach</span>
                <h3 class="section-title-panel">To the Edge of the World</h3>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768799519/IMG_6763_sxyz76.jpg" class="story-image" data-caption="Approaching South Georgia by zodiac - the Seabourn Quest anchored in the bay." alt="Seabourn Quest at South Georgia">
                <p class="photo-caption-inline">The Seabourn Quest anchored in the bay as we headed to shore by zodiac.</p>
                <p>South Georgia is one of those places that exists more as legend than destination. A remote British territory in the South Atlantic, closer to Antarctica than anywhere else. No airport. No permanent population beyond a handful of scientists and museum staff.</p>
                <p>To get here, you cross the Drake Passage - the roughest stretch of ocean on Earth. But when you finally see those jagged peaks rising from the sea, you understand why explorers risked everything to reach this place.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The Lecture</span>
                <h3 class="section-title-panel">The Penguin Expert</h3>
                <p>Before we reached South Georgia, a penguin expert gave a series of talks aboard ship. He was brilliant - the kind of scientist who could make you care deeply about something you'd never thought twice about.</p>
                <p>One evening in the lounge, he showed us a map that tracked the history of commercial whaling. It started in the Northern Atlantic, then moved to the Pacific as those populations collapsed. When there was nothing left up north, the industry pushed south - all the way to these waters.</p>
                <blockquote class="story-quote">They hunted whale populations to near extinction in the north, then chased the survivors to the bottom of the world.</blockquote>
                <p>He hung out with us musicians in the lounge several nights after his talks. He'd request Dan Fogelberg and Cat Stevens songs while we talked about the wildlife we'd see. I wish I'd gotten a photo with him.</p>
                
                <div class="whaling-info-box" style="background: rgba(0,0,0,0.3); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; border-left: 3px solid var(--coral);">
                    <h4 style="color: var(--gold); margin-bottom: 0.75rem; font-family: 'Cormorant Garamond', serif;">The Decimation</h4>
                    <p style="font-size: 0.9rem; margin-bottom: 0.75rem;">Between 1900 and 1999, an estimated <strong>2.9 million whales</strong> were killed by industrial whaling. The Blue Whale population fell from 340,000 to just 5,000 - a 98.5% decline.</p>
                    <p style="font-size: 0.85rem; color: rgba(245, 240, 232, 0.7);">South Georgia's Grytviken station alone processed over 175,000 whales between 1904 and 1965.</p>
                    <p style="font-size: 0.75rem; margin-top: 0.75rem;"><a href="https://ourworldindata.org/whaling" target="_blank" style="color: var(--gold);">Source: Our World in Data →</a></p>
                </div>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">Grytviken</span>
                <h3 class="section-title-panel">What Remains</h3>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768798857/IMG_6834_fx0gdi.jpg" class="story-image" data-caption="The whale catcher Petrel, rusting where she was abandoned. Elephant seals now lounge on the beach." alt="Petrel whale catcher with elephant seals">
                <p class="photo-caption-inline">The whale catcher <em>Petrel</em>, rusting where she was abandoned. Elephant seals now lounge on the beach.</p>
                <p>Grytviken was once the largest whaling station in the world. Norwegian whalers built it in 1904, and for sixty years it processed the bodies of hundreds of thousands of whales - blue, fin, humpback, right, sei. Everything.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1768799893/IMG_6827_sichau.jpg" class="story-image" data-caption="Mountains of anchor chain and a rotting boat hull - remnants of the whaling industry." alt="Anchor chains and wrecked boat">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1768799322/IMG_6818_qwfqd8.jpg" class="story-image" data-caption="The whalers' church, framed by rusted industrial buildings." alt="Church behind rust">
                </div>
                <p class="photo-caption-inline">Mountains of anchor chain, rotting hulls, and the whalers' church still standing among the ruins.</p>
                <p>I thought it was ironic to see a church here. This place caused so much misery for so many years. But I suppose the men who worked here needed something to hold onto as well.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1768800003/IMG_6822_bz1res.jpg" class="story-image" data-caption="Interpretive sign: The Petrel and Workshops at Grytviken." alt="Infographic: Petrel and Workshops">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1768799273/IMG_6824_icgv5s.jpg" class="story-image" data-caption="Interpretive sign: The Meal Plant where whale carcasses were processed." alt="Infographic: Meal Plant">
                </div>
                <p class="photo-caption-inline">Interpretive signs explain what each building was used for. The details are hard to read.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">Nature Reclaims</span>
                <h3 class="section-title-panel">The Wildlife Returns</h3>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768799381/IMG_6796_dvoe4m.jpg" class="story-image" data-caption="A king penguin and fur seal in front of the abandoned whaling station." alt="King penguin and seal with ruins">
                <p class="photo-caption-inline">A king penguin and fur seal, completely unbothered, with the ruins of the whaling station behind them.</p>
                <p>The station closed in 1965. In the sixty years since, the wildlife has returned with a vengeance. King penguins waddle through the ruins. Fur seals sprawl on the beaches where whale carcasses were once dragged ashore. Elephant seals sleep in the grass, oblivious to the history beneath them.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1768799349/IMG_6805_mzyioi.jpg" class="story-image" data-caption="An Antarctic fur seal, completely at ease." alt="Fur seal portrait">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1768799182/IMG_6830_copy_s3qmyz.jpg" class="story-image" data-caption="King penguin near the old pier, with an elephant seal resting behind." alt="King penguin with pier">
                </div>
                <p class="photo-caption-inline">Fur seals and king penguins have made Grytviken their home.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768799215/IMG_6825_copy_llb0iz.jpg" class="story-image" data-caption="Baby elephant seal. Those eyes." alt="Baby elephant seal">
                <p class="photo-caption-inline">A baby elephant seal looked up at me with those eyes. How could anyone harm such a creature?</p>
                <p>Standing there, looking at that baby seal, I felt physically sick. I understood the economics. I understood the historical context. But in that moment, I hated being part of the human race.</p>
                <blockquote class="story-quote">What the fuck were we thinking?</blockquote>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1768799453/IMG_6776_iwumrm.jpg" class="story-image" data-caption="Elephant seal enjoying a mud bath." alt="Elephant seal in mud">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1768799428/IMG_6779_ustje1.jpg" class="story-image" data-caption="A young fur seal in the tussock grass, looking for its mother." alt="Baby seal in grass">
                </div>
                <p class="photo-caption-inline">An elephant seal enjoying a mud bath, and a young fur seal looking for its mother.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">Shackleton</span>
                <h3 class="section-title-panel">An Accidental Pilgrimage</h3>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768799406/IMG_6787_uceutk.jpg" class="story-image" data-caption="Standing at Shackleton's grave. I stumbled upon it by accident." alt="At Shackleton's grave">
                <p class="photo-caption-inline">Standing at Ernest Shackleton's grave. I look pale because I was.</p>
                <p>I didn't plan to find Shackleton's grave. I was walking around the island, trying to process everything I'd seen, when I stumbled onto the small cemetery.</p>
                <p>And there he was. Ernest Henry Shackleton. Explorer. The man who led the most incredible survival story in history - 28 men stranded on the ice for over a year, every single one brought home alive.</p>
                <p>He died here in 1922, at the start of another expedition. His wife asked that he be buried on South Georgia, the island where he'd achieved his greatest triumph. Sailors who visit leave whisky at his grave and toast to "The Boss."</p>
                <blockquote class="story-quote">I was frankly stunned. It took the rest of the day for my mind to catch up with where my body was standing.</blockquote>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The Edge</span>
                <h3 class="section-title-panel">Reflection</h3>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768799478/IMG_6773_qijzm5.jpg" class="story-image" data-caption="Our excursion group exploring the island." alt="Excursion group">
                <p class="photo-caption-inline">Our group exploring the island, navigating between wildlife and history.</p>
                <p>South Georgia sits at the edge of everything. The edge of the map. The edge of human habitation. The edge of what we're capable of - both the worst and the best.</p>
                <p>We came here to see wildlife, and we saw it in abundance. But we also saw what happens when humans decide something is a resource to be extracted. And we saw what happens when we finally stop.</p>
                <p>The penguins don't know about the history. The seals don't care about the rusted machinery. They've simply moved back in. Maybe that's the only redemption available - not forgiveness, just the patient work of time and nature reclaiming what was taken.</p>
            </div>
            
            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about this location</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🐧</span>
                        <span>South Georgia Island</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Shackleton's Crossing:</strong> In 1916, Shackleton crossed the island's uncharted mountains in 36 hours to reach help - a feat not repeated for another 40 years.</li>
                        <li><strong>King Penguin Capital:</strong> South Georgia is home to over 400,000 breeding pairs of king penguins - one of the largest colonies on Earth.</li>
                        <li><strong>Whaling History:</strong> Between 1904-1965, over 175,000 whales were processed at Grytviken alone.</li>
                        <li><strong>Rat Eradication:</strong> A massive project from 2011-2015 successfully removed all invasive rats from the island, allowing seabirds to return.</li>
                        <li><strong>British Territory:</strong> Officially the "South Georgia and the South Sandwich Islands," it's a British Overseas Territory with no permanent population.</li>
                    </ul>
                </div>
            </div>
            
            ${generateGallery('southGeorgia')}
        `,
        fullDesc: "South Georgia is one of the most remote places on Earth. We visited Shackleton's grave at Grytviken and toasted with whisky, as is tradition. But the real experience was confronting the ruins of the whaling industry - and watching nature slowly reclaim what was taken.\n\nStanding among elephant seals and king penguins, in the shadow of rusting whale catchers, I felt the weight of what humans are capable of. The worst and the best.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768798857/IMG_6834_fx0gdi.jpg"
    },
    {
        id: 34,
        title: "Lemaire Channel, Antarctica",
        coords: [-65.05, -63.95],
        tag: "Kodak Gap",
        icon: "🧊",
        isDoor: false,
        shortDesc: "5am wake-up call: we might be going in.",
        imagePosition: "center",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item"><span class="demo-icon">📍</span> Antarctic Peninsula</div>
                <div class="demo-item"><span class="demo-icon">📷</span> "Kodak Gap"</div>
                <div class="demo-item"><span class="demo-icon">📏</span> 1,600m Wide</div>
                <div class="demo-item"><span class="demo-icon">🚢</span> Seabourn Quest</div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">5am</span>
                <h3 class="section-title-panel">The Captain's Announcement</h3>
                <p>The captain came on early—around 5am—to tell us we might be going in. The Lemaire Channel isn't always passable. Ice can block the entrance entirely. Some days you have to turn back.</p>
                <p>We waited. Then it looked like we might not try it. We waited some more.</p>
                <p>Then it was a go.</p>
                <div class="image-row image-row-6">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/lemaire/img_6697" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/lemaire/img_6697" data-caption="Approaching the channel" alt="Approach">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/lemaire/img_6698" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/lemaire/img_6698" data-caption="We're going in" alt="Entering">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/lemaire/img_6699" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/lemaire/img_6699" data-caption="Ice cliffs rising" alt="Ice cliffs">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/lemaire/img_6702" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/lemaire/img_6702" data-caption="Into Kodak Gap" alt="Kodak Gap">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/lemaire/img_6703" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/lemaire/img_6703" data-caption="Towering walls of ice" alt="Ice walls">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/lemaire/img_6704" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/lemaire/img_6704" data-caption="The channel narrows" alt="Narrow passage">
                </div>
                <p class="photo-caption-inline">Everyone reached for their cameras. They call it Kodak Gap for a reason.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Passage</span>
                <h3 class="section-title-panel">Through the Ice</h3>
                <p>The Lemaire Channel is barely wide enough for the ship—only 1,600 meters at its narrowest. Ice cliffs tower on both sides. The water is so still it mirrors the mountains. Time stops here.</p>
                <div class="image-row image-row-6">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/lemaire/img_6706" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/lemaire/img_6706" data-caption="Mirror-still waters" alt="Still water">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/lemaire/img_6707" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/lemaire/img_6707" data-caption="Reflections" alt="Reflections">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/lemaire/img_6708" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/lemaire/img_6708" data-caption="Ice and sky" alt="Ice and sky">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/lemaire/img_6709" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/lemaire/img_6709" data-caption="Frozen silence" alt="Silence">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/lemaire/img_6710" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/lemaire/img_6710" data-caption="The passage continues" alt="Passage">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/lemaire/img_6711" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/lemaire/img_6711" data-caption="Antarctica's cathedral" alt="Cathedral">
                </div>
                <p class="photo-caption-inline">You've never seen anything like it. And you never will again—each moment down here is unique, unrepeatable.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Through to the Other Side</span>
                <h3 class="section-title-panel">We Made It</h3>
                <p>Every iceberg is different. Some are brilliant white, others glow blue from within. And then we were through—out the other side of one of the most beautiful passages on Earth.</p>
                <div class="image-row image-row-5">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/lemaire/img_6712" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/lemaire/img_6712" data-caption="The iconic view" alt="Iconic">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/lemaire/img_6713" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/lemaire/img_6713" data-caption="Emerging from the channel" alt="Emerging">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/lemaire/img_6714" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/lemaire/img_6714" data-caption="Looking back" alt="Looking back">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/lemaire/img_6715" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/lemaire/img_6715" data-caption="The other side" alt="Other side">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/lemaire/img_6716" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/lemaire/img_6716" data-caption="We made it through" alt="Through">
                </div>
                <p class="photo-caption-inline">Worth every minute of that 5am wake-up call.</p>
            </div>

            <p class="more-info-toggle" onclick="this.nextElementSibling.classList.toggle('expanded'); this.textContent = this.nextElementSibling.classList.contains('expanded') ? '− Less about Lemaire' : '+ More about Lemaire'">+ More about Lemaire</p>
            <div class="more-info-content">
                <p><strong>Kodak Gap:</strong> Named because every passenger reaches for their camera—predating digital photography when Kodak film was king.</p>
                <p><strong>Narrow Passage:</strong> Only 1,600 meters wide at its narrowest point and 11 km long—some ships are too wide to pass through.</p>
                <p><strong>Discovery:</strong> First navigated in 1898 by Adrien de Gerlache's Belgian Antarctic Expedition aboard the Belgica.</p>
                <p><strong>Not Always Passable:</strong> Sometimes ice blocks the channel entirely and ships must turn back or find another route.</p>
            </div>

            ${generateGallery('lemaire')}
        `,
        fullDesc: "The captain came on at 5am: we might be going in. We waited. Then it looked like we might not try it. We waited some more. Then it was a go—and I snapped these photos on the way through Kodak Gap.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/lemaire/img_6712"
    },
    {
        id: 121,
        title: "Antarctica - Petermann Island",
        coords: [-65.17, -64.13],
        tag: "Penguin Paradise",
        icon: "🐧",
        isDoor: false,
        shortDesc: "4am wake-ups in the frozen silence.",
        imagePosition: "center",
        imageCaption: "Petermann Island from the deck of the ship.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item"><span class="demo-icon">📍</span> Antarctic Peninsula</div>
                <div class="demo-item"><span class="demo-icon">🐧</span> Penguin Colonies</div>
                <div class="demo-item"><span class="demo-icon">⏰</span> 4am Wake-Up</div>
                <div class="demo-item"><span class="demo-icon">🚢</span> Zodiac Excursions</div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Crew Duties</span>
                <h3 class="section-title-panel">4am in Antarctica</h3>
                <p>All musicians had additional duties on ships—usually minor things like training and crew drills. But in Antarctica, we were up at 4 in the morning, getting the boarding and offloading stations ready for the guests. Everyone had to be fitted in life jackets, excursion boots, and parkas before leaving on the Zodiac boats for the ice.</p>
                <div class="image-row image-row-4">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/petermann/20150217_092200" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/petermann/20150217_092200" data-caption="4am - getting ready for excursions" alt="Morning prep">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/petermann/20150217_095324" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/petermann/20150217_095324" data-caption="Early morning Antarctic light" alt="Morning light">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/petermann/img_6490" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/petermann/img_6490" data-caption="Zodiac station setup" alt="Zodiac prep">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/petermann/img_6534" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/petermann/img_6534" data-caption="Ready for guests" alt="Morning prep">
                </div>
                <p class="photo-caption-inline">This also gave me the chance to take in the eerie quiet of the morning.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Before Dawn</span>
                <h3 class="section-title-panel">The Eerie Quiet</h3>
                <p>Before the sun broke through, Antarctica was a world of silence and shadow. The ice stretched endlessly in every direction, and the only sounds were the gentle lapping of water against the hull and the occasional crack of a distant glacier.</p>
                <div class="image-row image-row-6">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/petermann/img_6481" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/petermann/img_6481" data-caption="Pre-dawn silence" alt="Pre-dawn">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/petermann/img_6487" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/petermann/img_6487" data-caption="The frozen world" alt="Frozen landscape">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/petermann/img_6485" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/petermann/img_6485" data-caption="Antarctic stillness" alt="Stillness">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/petermann/img_6467" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/petermann/img_6467" data-caption="Ice in shadow" alt="Ice shadow">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/petermann/img_6459" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/petermann/img_6459" data-caption="Waiting for sunrise" alt="Pre-sunrise">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/petermann/img_6451" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/petermann/img_6451" data-caption="The quiet before" alt="Quiet morning">
                </div>
                <p class="photo-caption-inline">A world of ice and silence, waiting for the light.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Wildlife</span>
                <h3 class="section-title-panel">And Then... Penguins</h3>
                <p>They appeared out of nowhere—waddling along the ice, diving into the water, completely unbothered by our presence. Thousands of them, going about their morning as if we weren't even there.</p>
                <div class="image-row image-row-3">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/petermann/img_6443" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/petermann/img_6443" data-caption="First penguin sighting" alt="Penguins">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/petermann/img_6447" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/petermann/img_6447" data-caption="The colony comes alive" alt="Penguin colony">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/petermann/img_6446" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/petermann/img_6446" data-caption="Unbothered by our presence" alt="Penguins on ice">
                </div>
                <p class="photo-caption-inline">Completely at home in their frozen paradise.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Sunrise</span>
                <h3 class="section-title-panel">The Sun Breaks Through</h3>
                <p>And then the clouds parted. The ice transformed from grey to gold, from white to impossible shades of blue and pink. This is what we woke up for.</p>
                <div class="image-row image-row-7">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/petermann/20150217_095324" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/petermann/20150217_095324" data-caption="First light" alt="First light">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/petermann/20150217_095348" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/petermann/20150217_095348" data-caption="Sun breaking through" alt="Sunrise">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/petermann/20150217_091633" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/petermann/20150217_091633" data-caption="Golden hour on ice" alt="Golden light">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/petermann/20150217_090228" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/petermann/20150217_090228" data-caption="Antarctica awakens" alt="Morning light">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/petermann/20150217_090307" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/petermann/20150217_090307" data-caption="Ice in morning light" alt="Morning ice">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/petermann/20150217_091022" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/petermann/20150217_091022" data-caption="The transformation" alt="Sunrise transformation">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/petermann/20150217_091114" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/petermann/20150217_091114" data-caption="What we woke up for" alt="Antarctic sunrise">
                </div>
                <p class="photo-caption-inline">This is why you wake up at 4am in Antarctica.</p>
            </div>

            <p class="more-info-toggle" onclick="this.nextElementSibling.classList.toggle('expanded'); this.textContent = this.nextElementSibling.classList.contains('expanded') ? '− Less about Petermann' : '+ More about Petermann'">+ More about Petermann</p>
            <div class="more-info-content">
                <p>Named after German geographer August Petermann by the German Antarctic Expedition of 1873-74. Home to Adélie and Gentoo penguin colonies—thousands of breeding pairs during summer.</p>
                <p>The Argentine Groussac Refuge, built here in 1955, is now an Antarctic Historic Site. In 1978, Emilio Palma became the first person born in Antarctica, on the peninsula near here.</p>
            </div>

            ${generateGallery('petermann')}
        `,
        fullDesc: "All musicians had additional duties on ships. In Antarctica, we were up at 4am getting Zodiac stations ready for guests. This gave me the chance to take in the eerie quiet of the morning—before the sun broke through and the penguins appeared.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/petermann/20150217_092200"
    },
    {
        id: 35,
        title: "South Shetland Islands",
        coords: [-62.0, -58.5],
        tag: "Gateway to Antarctica",
        icon: "🧊",
        isDoor: false,
        shortDesc: "4am mysteries and sled rides on ice.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item"><span class="demo-icon">📍</span> Antarctic Gateway</div>
                <div class="demo-item"><span class="demo-icon">🌡️</span> -2°C Summer</div>
                <div class="demo-item"><span class="demo-icon">🚢</span> Seabourn Quest</div>
                <div class="demo-item"><span class="demo-icon">🛷</span> Sled Rides!</div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Before Dawn</span>
                <h3 class="section-title-panel">4am in Antarctica</h3>
                <p>At 4am in Antarctica, things appear and disappear in the fog. Cliffs appear to hang in the sky. The horizon blurs until you can't tell where the ice ends and the clouds begin. It's disorienting and beautiful.</p>
                <div class="image-row image-row-5">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6464" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6464" data-caption="Fog and ice blur together" alt="Fog">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6465" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6465" data-caption="Cliffs hanging in the sky" alt="Cliffs in fog">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6470" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6470" data-caption="Where does the ice end?" alt="Ice and sky">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6475" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6475" data-caption="The world dissolves" alt="Fog landscape">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6472" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6472" data-caption="Eerie morning silence" alt="Morning silence">
                </div>
                <p class="photo-caption-inline">The sky and the land blur together in the pre-dawn light.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Sunrise</span>
                <h3 class="section-title-panel">Then the Sky Opened Up</h3>
                <p>Like the previous morning at Petermann Island, the sky opened up and the change was utterly breathtaking. The grey world transformed into impossible blues and whites.</p>
                <div class="image-row image-row-6">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6511" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6511" data-caption="The clouds begin to part" alt="Clouds parting">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6514" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6514" data-caption="Blue sky appears" alt="Blue sky">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6515" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6515" data-caption="The transformation" alt="Transformation">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6516" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6516" data-caption="Antarctica revealed" alt="Antarctica revealed">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6517" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6517" data-caption="Breathtaking" alt="Breathtaking view">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6521" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6521" data-caption="Worth the 4am wake-up" alt="Morning glory">
                </div>
                <p class="photo-caption-inline">Utterly breathtaking.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Going Ashore</span>
                <h3 class="section-title-panel">Crew Day on the Ice</h3>
                <p>Today was special—several of us crew members were finally released from our afternoon shift to go ashore! After days of watching guests head out on Zodiacs, it was finally our turn to set foot on the frozen continent.</p>
                <div class="image-row image-row-8">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6534" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6534" data-caption="Finally going ashore" alt="Going ashore">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6535" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6535" data-caption="On the ice" alt="On ice">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6538" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6538" data-caption="Crew day!" alt="Crew day">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6539" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6539" data-caption="Exploring" alt="Exploring">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6540" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6540" data-caption="Antarctica!" alt="Antarctica">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6546" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6546" data-caption="Taking it all in" alt="Taking it in">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6548" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6548" data-caption="Walking on Antarctica" alt="Walking">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6553" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6553" data-caption="Our turn at last" alt="Crew ashore">
                </div>
                <p class="photo-caption-inline">Our turn at last to walk on the seventh continent.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Hill</span>
                <h3 class="section-title-panel">The Great Antarctic Sled Ride</h3>
                <p>We decided to climb a rather large hill. The penguins watched us with what I can only describe as bemused indifference. Higher and higher we climbed, until finally we all piled onto the sled...</p>
                <div class="image-row image-row-5">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6556" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6556" data-caption="The climb begins" alt="Climbing">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6558" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6558" data-caption="Penguins watching" alt="Penguins watching">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6559" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6559" data-caption="Our audience" alt="Penguin audience">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6563" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6563" data-caption="Getting higher" alt="Higher up">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6565" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6565" data-caption="Ready to sled" alt="Ready to sled">
                </div>
                <p class="photo-caption-inline">We all piled on the sled and down we went!</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The End</span>
                <h3 class="section-title-panel">A Day to Remember</h3>
                <p>Some days stay with you forever. This was one of them.</p>
                <div class="image-row image-row-2">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6717" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6717" data-caption="Antarctica memories" alt="Memories">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/south-shetlands/img_6572" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/south-shetlands/img_6572" data-caption="Until next time" alt="Farewell">
                </div>
                <p class="photo-caption-inline">A crew day on the frozen continent we'll never forget.</p>
            </div>

            <p class="more-info-toggle" onclick="this.nextElementSibling.classList.toggle('expanded'); this.textContent = this.nextElementSibling.classList.contains('expanded') ? '− Less about South Shetlands' : '+ More about South Shetlands'">+ More about South Shetlands</p>
            <div class="more-info-content">
                <p>The South Shetland Islands were discovered in 1819 by British merchant William Smith. Within two years, seal hunters had arrived in such numbers that the fur seal population was nearly wiped out.</p>
                <p>Today the islands host research stations from multiple countries including Argentina, Chile, China, Russia, and others. Deception Island, with its flooded volcanic caldera, is one of the most visited sites in Antarctica.</p>
            </div>

            ${generateGallery('southShetlands')}
        `,
        fullDesc: "At 4am in Antarctica, things appear and disappear in the fog. Then the sky opens up and it's breathtaking. And on one special day, the crew got to go ashore and sled down a hill while penguins watched.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/south-shetlands/img_6563"
    },
    {
        id: 37,
        title: "Barcelona, Spain",
        coords: [41.38, 2.17],
        tag: "Gaudí's Playground",
        icon: "🎭",
        isDoor: false,
        shortDesc: "Where art and architecture collide.",
        imagePosition: "center",
        imageCaption: "Barcelona from the hills above the city.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">👥</span>
                    <span class="demo-value">~1.6 Million</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏛️</span>
                    <span class="demo-value">Gaudí's City</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏅</span>
                    <span class="demo-value">1992 Olympics</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">Catalonia</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The City</span>
                <h3 class="section-title-panel">Gaudí's Playground</h3>
                <p>Barcelona is Gaudí's city. The Sagrada Família defies description - a cathedral that's been under construction for 140 years and still isn't finished. Park Güell is a fever dream in tile. La Rambla pulses with energy day and night.</p>
                <p>This city knows how to live.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Tour</span>
                <h3 class="section-title-panel">Olympic Village & Museum</h3>
                <p>I took a tour to the Olympic Village and museum from the 1992 Summer Games. The whole complex is still impressive - built to host the world, now a vibrant neighborhood.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768951524/Screenshot_20260120_141928_Facebook_ia3j8c.jpg" class="story-image" alt="Barcelona Olympic Village">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768951524/Screenshot_20260120_141912_Facebook_ljocf4.jpg" class="story-image" alt="Barcelona Olympic site">
                </div>
                <p class="photo-caption-inline">The Olympic Village - built for 1992, still going strong.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768951524/Screenshot_20260120_141901_Facebook_rjjmhl.jpg" class="story-image" alt="Olympic Museum">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768951532/Screenshot_20260120_141853_Facebook_njurfr.jpg" class="story-image" alt="Barcelona views">
                </div>
                <p class="photo-caption-inline">The Olympic Museum and views of the city.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768951532/Screenshot_20260120_141831_Facebook_aov5ol.jpg" class="story-image" alt="Barcelona cityscape">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768951532/Screenshot_20260120_141840_Facebook_rldpf4.jpg" class="story-image" alt="Barcelona architecture">
                </div>
                <p class="photo-caption-inline">Barcelona from above - Mediterranean magic.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about this location</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🎭</span>
                        <span>Catalan Capital</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Unfinished Masterpiece:</strong> La Sagrada Família has been under construction since 1882 - expected completion is 2026, 100 years after Gaudí's death.</li>
                        <li><strong>Olympic Legacy:</strong> The 1992 Olympics transformed Barcelona, opening it to the sea and creating the beach culture that defines it today.</li>
                        <li><strong>Gothic Quarter:</strong> The Barri Gòtic contains Roman ruins beneath medieval streets - 2,000 years of history layered on top of itself.</li>
                        <li><strong>Gaudí's City:</strong> Seven of Gaudí's works are UNESCO World Heritage Sites - more than any other architect in the world.</li>
                        <li><strong>Catalonia:</strong> Barcelona is the capital of Catalonia, a region with its own language, culture, and ongoing independence movement.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('barcelona')}
        `,
        fullDesc: "Barcelona is Gaudí's city.\n\nThe Sagrada Família defies description-a cathedral that's been under construction for 140 years and still isn't finished. Park Güell is a fever dream in tile. La Rambla pulses with energy day and night. This city knows how to live.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769805706/20150713_123849_xbyscp.jpg"
    },
    {
        id: 38,
        title: "St. Tropez, France",
        coords: [43.27, 6.64],
        tag: "Riviera Glamour",
        icon: "⛱️",
        isDoor: false,
        shortDesc: "Where the beautiful people play.",
        useRichContent: true,
        richContent: `
            <p>St. Tropez was a fishing village until Brigitte Bardot showed up.</p>
            <p>Now it's superyachts and champagne, designer boutiques and paparazzi. But wander away from the port and you find quiet squares, excellent rosé, and that golden Provençal light that painters have chased for centuries.</p>

            ${generateGallery('stTropez')}
        `,
        fullDesc: "St. Tropez was a fishing village until Brigitte Bardot showed up.\n\nNow it's superyachts and champagne, designer boutiques and paparazzi. But wander away from the port and you find quiet squares, excellent rosé, and that golden Provençal light that painters have chased for centuries.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1767738529/IMG_5536_ipjhwy.jpg"
    },
    {
        id: 39,
        title: "Ibiza, Spain",
        coords: [38.91, 1.43],
        tag: "Island of Two Faces",
        icon: "🎉",
        isDoor: false,
        shortDesc: "Party island with a secret peaceful side.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item"><span class="demo-icon">📍</span> Balearic Islands</div>
                <div class="demo-item"><span class="demo-icon">👥</span> Pop: 50,000</div>
                <div class="demo-item"><span class="demo-icon">🏛️</span> UNESCO Old Town</div>
                <div class="demo-item"><span class="demo-icon">🎉</span> Party Capital</div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Other Ibiza</span>
                <h3 class="section-title-panel">Dalt Vila - The Walled City</h3>
                <p>Everyone knows Ibiza for the clubs. But the island has another side. The old town—Dalt Vila—is a UNESCO World Heritage site, a Renaissance fortress perched above the harbor. While the beaches pulse with electronic beats, the cobblestone streets up here have barely changed in centuries.</p>
                <div class="image-row image-row-6">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/ibiza/img_20140610_113541" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/ibiza/img_20140610_113541" data-caption="Views from Dalt Vila" alt="Old town view">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/ibiza/img_20140610_113551" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/ibiza/img_20140610_113551" data-caption="The harbor below" alt="Harbor view">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/ibiza/img_20140610_114901" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/ibiza/img_20140610_114901" data-caption="Statue in the old town" alt="Statue">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/ibiza/img_20140610_135036" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/ibiza/img_20140610_135036" data-caption="The fortress walls" alt="Fortress walls">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/ibiza/img_20140622_100836" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/ibiza/img_20140622_100836" data-caption="Historic architecture" alt="Architecture">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/ibiza/img_20140622_101517" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/ibiza/img_20140622_101517" data-caption="Exploring the walled city" alt="Walled city">
                </div>
                <p class="photo-caption-inline">The Renaissance walls have stood guard since the 16th century.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">In the Harbor</span>
                <h3 class="section-title-panel">The Clipper Ship</h3>
                <p>Ibiza's harbor is a parade of vessels—superyachts, ferries, fishing boats. But nothing turns heads quite like a tall ship. When a clipper comes to port, it's a reminder that these waters have been sailed for millennia, long before the DJs arrived.</p>
                <div class="image-row image-row-3">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/ibiza/img_20140610_142859" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/ibiza/img_20140610_142859" data-caption="Clipper ship in Ibiza harbor" alt="Clipper ship">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/ibiza/img_20140610_113638" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/ibiza/img_20140610_113638" data-caption="Tall ship rigging" alt="Rigging">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/ibiza/img_20140610_143010" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/ibiza/img_20140610_143010" data-caption="A different kind of Ibiza vessel" alt="Tall ship">
                </div>
                <p class="photo-caption-inline">Old world meets new in the Balearics.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Celebrity Sighting</span>
                <h3 class="section-title-panel">Boy George in Ibiza</h3>
                <p>Ibiza has always attracted artists, musicians, and icons. When you're playing the clubs and bars, you never know who might walk in.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/ibiza/img_20140622_121033" class="story-image" data-caption="Boy George in Ibiza" alt="Boy George">
                <p class="photo-caption-inline">A legend on the island of legends.</p>
            </div>

            <p class="more-info-toggle" onclick="this.nextElementSibling.classList.toggle('expanded'); this.textContent = this.nextElementSibling.classList.contains('expanded') ? '− Less about Ibiza' : '+ More about Ibiza'">+ More about Ibiza</p>
            <div class="more-info-content">
                <p>The Phoenicians founded a settlement here around 654 BC. The old town's walls were built by Charles V in the 16th century. Sunset at Café del Mar became a ritual in the 1980s. Ibiza is whatever you need it to be—ancient history or all-night party, secluded beach or world-famous club.</p>
            </div>

            ${generateGallery('ibiza')}
        `,
        fullDesc: "Everyone knows Ibiza for the clubs. But the island has another side.\n\nThe old town is a UNESCO World Heritage site. The beaches in the north are quiet and pristine. Sunset at Café del Mar is a spiritual experience. Ibiza is whatever you need it to be.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/ibiza/img_20140610_135303"
    },
    // New locations - January 2026
    {
        id: 41,
        title: "Tierra del Fuego",
        coords: [-54.80, -68.30],
        tag: "End of the World",
        icon: "🏔️",
        isDoor: false,
        shortDesc: "Where the land runs out and the wind takes over.",
        useRichContent: true,
        richContent: `
            <p>The name means 'Land of Fire' but it feels more like the edge of everything.</p>
            <p>Magellan named it for the fires of the indigenous people he saw burning along the shore. Today it's a windswept wilderness at the bottom of South America, where the Andes finally surrender to the sea.</p>
            <p>Sailing through, you understand why early explorers thought they'd reached the end of the world. The mountains rise jagged and defiant from the water. The sky shifts from blue to grey in minutes. Everything feels raw and unfinished - like the earth is still deciding what it wants to be.</p>

            ${generateGallery('tierraDelFuego')}
        `,
        fullDesc: "The name means 'Land of Fire' but it feels more like the edge of everything.\n\nMagellan named it for the fires of the indigenous people he saw burning along the shore. Today it's a windswept wilderness at the bottom of South America, where the Andes finally surrender to the sea.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1770838417/shiplife/tierra-del-fuego/azocrgih4bpozyoyvsiu.jpg"
    },
    {
        id: 120,
        title: "Beagle Channel, Chile",
        coords: [-54.88, -69.50],
        tag: "Chilean Fjords",
        icon: "⛰️",
        isDoor: false,
        useRichContent: true,
        shortDesc: "Sailing through Patagonia's dramatic channels.",
        fullDesc: "The Beagle Channel connects the Atlantic and Pacific through some of the most dramatic scenery on Earth. Named after Darwin's ship, this narrow passage winds between snow-capped mountains, past glaciers calving into the sea, and through waters so still they mirror the sky.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769814774/beagle_channl_xrs5y9.jpg",
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">Patagonia</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">📏</span>
                    <span class="demo-value">240 km</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🚢</span>
                    <span class="demo-value">HMS Beagle</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🧭</span>
                    <span class="demo-value">1833</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Passage</span>
                <h3 class="section-title-panel">Chilean Fjords</h3>
                <p>En route to Antarctica, we sailed through some of the most spectacular scenery I've ever witnessed. The channels of Patagonia.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Gallery</span>
                <h3 class="section-title-panel">The Journey South</h3>
                <details class="collapsible-gallery" open>
                    <summary>Photos from the Chilean Fjords</summary>
                    <div class="story-gallery-grid">
                        <!-- Photos to be added after Cloudinary upload -->
                    </div>
                </details>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about this location</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">⛰️</span>
                        <span>The Beagle Channel</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Named for Darwin:</strong> The channel was charted by the HMS Beagle in 1833, the same ship that carried Charles Darwin on his famous voyage that would inspire the theory of evolution.</li>
                        <li><strong>Border Dispute:</strong> The channel marks the border between Chile and Argentina. The two nations nearly went to war over islands here in 1978 before the Pope mediated a settlement.</li>
                        <li><strong>Glacier Alley:</strong> The nearby Avenue of the Glaciers features five tidewater glaciers descending from the Darwin Ice Field - named Italia, Holanda, Alemania, Francia, and España.</li>
                        <li><strong>Indigenous History:</strong> The Yaghan people navigated these waters for over 10,000 years, surviving the harsh climate as the world's southernmost human inhabitants.</li>
                        <li><strong>Wildlife:</strong> Magellanic penguins, sea lions, and Andean condors are common sights along the channel's dramatic coastline.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('chileanFjords', 'Photos')}
        `
    },
    {
        id: 42,
        title: "Melbourne, Australia",
        coords: [-37.81, 144.96],
        tag: "Australia's Cultural Capital",
        icon: "☕",
        isDoor: false,
        shortDesc: "Coffee, culture, and hidden laneways.",
        useRichContent: true,
        richContent: `
            <p>Melbourne takes its coffee seriously. Very seriously.</p>
            <p>The city's famous laneways hide street art, tiny bars, and some of the best food in the Southern Hemisphere. It's Australia's answer to Europe - cultured, cosmopolitan, and endlessly interesting.</p>

            ${generateGallery('melbourne')}
        `,
        fullDesc: "Melbourne takes its coffee seriously. Very seriously.\n\nThe city's famous laneways hide street art, tiny bars, and some of the best food in the Southern Hemisphere. It's Australia's answer to Europe-cultured, cosmopolitan, and endlessly interesting.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769521371/IMG_20131226_105910_urj5kq.jpg"
    },
    {
        id: 43,
        title: "Amazon River",
        coords: [-3.1190, -60.0217],
        tag: "Opera in the Jungle",
        icon: "🌿",
        isDoor: false,
        shortDesc: "Manaus - where the Amazon meets high culture.",
        imagePosition: "center",
        imageCaption: "Sunset over the Rio Negro. Manaus glows at the edge of the jungle.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">Manaus, Brazil</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏛️</span>
                    <span class="demo-value">Teatro Amazonas</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🚢</span>
                    <span class="demo-value">Two Visits</span>
                </div>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The River Sea</span>
                <h3 class="section-title-panel">"Like a River We Journey to the Sea"</h3>
                <p>1,000 miles up the Amazon River is a city of two million people called Manaus.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768955757/IMG_6129_hwafyh.jpg" class="story-image" data-caption="Teatro Amazonas - the opera house in the jungle." alt="Teatro Amazonas exterior">
                <p class="photo-caption-inline">Teatro Amazonas. They built this in the middle of the Amazon.</p>
                <p>In that city is an opera house.</p>
                <p>The Teatro Amazonas was built during the rubber boom, when Manaus was one of the richest cities on Earth. Italian marble, French chandeliers, English steel - all shipped up the river to this unlikely outpost of European grandeur.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The Opera House</span>
                <h3 class="section-title-panel">European Grandeur in the Jungle</h3>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768955858/IMG_6071_yay66j.jpg" class="story-image" data-caption="Teatro Amazonas from the front." alt="Teatro Amazonas front">
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1768955835/IMG_6083_wcbeq4.jpg" class="story-image" data-caption="Inside the Teatro Amazonas." alt="Teatro Amazonas interior">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1768955810/IMG_6104_ve9cwn.jpg" class="story-image" data-caption="Teatro Amazonas details." alt="Teatro Amazonas interior details">
                </div>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768955785/IMG_6112_vqplpw.jpg" class="story-image" data-caption="At the Teatro Amazonas with the horse carriage." alt="Derrick at Teatro Amazonas with carriage">
                <p class="photo-caption-inline">The full opera house experience.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The River</span>
                <h3 class="section-title-panel">The Mightiest River on Earth</h3>
                <p>The Amazon carries more water than the next seven largest rivers combined.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768961199/IMG_6020_yyepgk.jpg" class="story-image" data-caption="On the Amazon River." alt="Amazon River">
                <p>Sailing up it feels like entering another world. The river is so wide in places you can't see the other side. Pink dolphins surface beside the ship. The jungle presses in from both banks, alive with sounds you've never heard.</p>
                <p>The meeting of the waters nearby - where the black Rio Negro meets the sandy Amazon - they flow side by side without mixing for miles. Like two worlds refusing to blend.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">First Visit</span>
                <h3 class="section-title-panel">Into the Tributary</h3>
                <p>I visited Manaus twice, two years apart. The first time, a few of us took a tributary excursion deep into the jungle - the kind of day you don't forget.</p>
                
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1768951523/Screenshot_20260120_142110_Facebook_sfqgia.jpg" class="story-image" data-caption="Holding a sloth - 2012 tributary excursion." alt="Derrick holding sloth">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1768951523/Screenshot_20260120_142041_Facebook_qa7xiz.jpg" class="story-image" data-caption="The sloth wasn't in any hurry to leave." alt="Sloth closeup">
                </div>
                <p class="photo-caption-inline">These guys move at their own pace. I respect that.</p>
                
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1768951523/Screenshot_20260120_142055_Facebook_sdm2xc.jpg" class="story-image" data-caption="Baby alligator - tributary wildlife." alt="Baby gator">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1768951604/Screenshot_20260120_134644_Facebook_vooudq.jpg" class="story-image" data-caption="Another young crocodilian friend." alt="Baby croc">
                </div>
                <p class="photo-caption-inline">The little ones are cute. The big ones... less so.</p>
                
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1768951518/Screenshot_20260120_142140_Facebook_fladgt.jpg" class="story-image" data-caption="A curious monkey in the Amazon." alt="Monkey">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1768951516/Screenshot_20260120_142200_Facebook_m2ofot.jpg" class="story-image" data-caption="Bird's nest in the canopy." alt="Tree with nest">
                </div>
                
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768951604/Screenshot_20260120_134703_Facebook_imcpbv.jpg" class="story-image" data-caption="A floating market along the tributary." alt="Jungle market">
                <p class="photo-caption-inline">Commerce finds a way, even in the middle of the Amazon.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">Second Visit</span>
                <h3 class="section-title-panel">Getting Lost</h3>
                <p>The second time was different. I stayed aboard until late afternoon, then ventured out alone into the west dock area.</p>
                <p>My GPS went nuts. Took me somewhere I definitely wasn't supposed to be.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768962276/IMG_6023_l1kkqd.jpg" class="story-image" data-caption="Lost in Manaus." alt="Lost in Manaus">
                <p class="photo-caption-inline">This is the part where you start questioning your decisions.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768962223/IMG_6027_ymbkko.jpg" class="story-image" data-caption="Still lost in Manaus." alt="Still lost">
                <p class="photo-caption-inline">Still lost.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768962156/IMG_6032_rcjr8i.jpg" class="story-image" data-caption="Lost some more in Manaus." alt="Lost some more">
                <p class="photo-caption-inline">Lost some more. It felt like this - but worse.</p>
                <p>That uneasy feeling of being somewhere you shouldn't be, not knowing which way leads back to safety.</p>
                <p>Eventually I found a port. The wrong end. But at least I knew the ship was <em>somewhere</em> along this water.</p>
                <p>Finding the ship again was one of the better moments of that trip.</p>
            </div>
            
            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about this location</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🌿</span>
                        <span>Manaus & The Amazon</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>River Volume:</strong> The Amazon discharges more water than the next seven largest rivers combined - about 20% of all freshwater that flows into the world's oceans.</li>
                        <li><strong>Meeting of the Waters:</strong> Near Manaus, the black Rio Negro meets the sandy Rio Solimões. They flow side by side without mixing for over 3 miles due to differences in temperature, speed, and density.</li>
                        <li><strong>Rubber Boom:</strong> In the late 1800s, Manaus was one of the wealthiest cities on Earth. The rubber barons sent their laundry to Europe and built an opera house in the jungle.</li>
                        <li><strong>Teatro Amazonas:</strong> Opened in 1896 with materials imported from Europe - Italian marble, Scottish steel, French tiles. The dome features 36,000 tiles in the colors of the Brazilian flag.</li>
                        <li><strong>Pink Dolphins:</strong> The Amazon river dolphin (boto) is the largest freshwater dolphin species. Local legend says they transform into handsome men at night.</li>
                    </ul>
                </div>
            </div>
            
            ${generateGallery('amazon')}
        `,
        fullDesc: "1,000 miles up the Amazon River is a city of two million people called Manaus. In that city is an opera house - the Teatro Amazonas, built during the rubber boom. I visited twice - the first time on a tributary excursion deep into the jungle, the second time I got lost in the west docks.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768952174/IMG_6136_bkdyes.jpg"
    },
    {
        id: 131,
        title: "Santarém, Brazil",
        coords: [-2.43, -54.71],
        tag: "Meeting of the Waters",
        icon: "🌿",
        isDoor: false,
        shortDesc: "Where the Tapajós meets the Amazon.",
        imagePosition: "center",
        useRichContent: true,
        richContent: `
            <div class="story-section-panel">
                <p>Santarém sits at the confluence of the Tapajós and Amazon rivers—a meeting of the waters where the dark blue Tapajós flows alongside the muddy brown Amazon before slowly mixing.</p>
                <p>This is deep Amazon territory. The city was founded in 1661 and served as a gateway to the interior. Today it's a glimpse of river life far from the tourist trail.</p>
            </div>

            ${generateGallery('santarem')}
        `,
        fullDesc: "Santarém sits at the confluence of the Tapajós and Amazon rivers—a meeting of the waters where the dark blue Tapajós flows alongside the muddy brown Amazon before slowly mixing.",
        image: "./images/hero/santarem/IMG_6160.jpg"
    },
    {
        id: 44,
        title: "Quebec City, Canada",
        coords: [46.81, -71.21],
        tag: "New France",
        icon: "🏰",
        isDoor: false,
        tag: "🎵 Original Song",
        useRichContent: true,
        richContent: `
        <div class="song-panel">
            <div class="song-status">
                <span class="status-label">Original Song</span>
                <span class="status-text">Coming Soon</span>
            </div>

            <div class="story-section-panel">
                <h3>Reserved for Music</h3>
                <p>This location has been set aside for an original song. The music is being written as a tribute to this place and the memories it holds.</p>
                <p><strong>Mood:</strong> Romantic / Historic</p>
                <p><strong>Theme:</strong> French Canada, winter magic, fortress walls</p>
            </div>

            <div class="lyrics-section" onclick="this.classList.toggle('expanded')">
                <div class="lyrics-header">
                    <span class="lyrics-title">
                        <span class="lyrics-icon">📝</span>
                        <span>Lyrics</span>
                    </span>
                    <span class="lyrics-toggle">▼</span>
                </div>
                <div class="lyrics-content">
                    <div class="lyrics-text">
<span class="verse-label">Coming Soon</span>

Lyrics will appear here when the song is complete.

This space is reserved for "Quebec City, Canada" -
an original composition inspired by this place.
                    </div>
                </div>
            </div>

            <div class="audio-player-container">
                <p style="text-align: center; font-size: 0.85rem; color: rgba(245,240,232,0.6); margin: 0;">
                    🎵 Audio player will appear when song is released
                </p>
            </div>
        </div>`,
        fullDesc: "Quebec City is the only walled city north of Mexico.\n\nThe old town feels transported from France-cobblestone streets, sidewalk cafés, the imposing Château Frontenac watching over it all. In winter, it transforms into a snow-covered fairy tale.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769521461/IMG_5903_bnajrx.jpg"
    },
    {
        id: 45,
        title: "Rio de Janeiro, Brazil",
        coords: [-22.91, -43.17],
        tag: "Cidade Maravilhosa",
        icon: "🎭",
        isDoor: false,
        shortDesc: "The marvelous city between mountains and sea.",
        imagePosition: "center",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">Guanabara Bay</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏖️</span>
                    <span class="demo-value">Copacabana</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">✝️</span>
                    <span class="demo-value">Cristo Redentor</span>
                </div>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The Marvelous City</span>
                <h3 class="section-title-panel">A City That Keeps You</h3>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768952763/IMG_6391_Large_kingel.jpg" class="story-image" data-caption="The famous Selarón Steps - a mosaic tribute to Rio." alt="Selarón Steps with RIO letters">
                <p class="photo-caption-inline">The Selarón Steps. Rio wants you to know where you are.</p>
                <p>Every time I disembarked in Rio, I got lost.</p>
                <p>Something about this city seemed to want to keep me there. Nothing was ever easy - until I finally reached the beach.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The Standoff</span>
                <h3 class="section-title-panel">Trapped in Copacabana</h3>
                <p>I wandered deep into Copacabana and found a little cafeteria with servers - not quite a restaurant, but close enough. I ordered, ate, and went to pay.</p>
                <p>My credit card wouldn't work.</p>
                <p>No cash. No Portuguese. The guy at the register didn't speak English. Someone next to him started translating. I called my bank - they said it wasn't their fault. <em>Yada yada.</em></p>
                <p>Here's the thing: this must happen often at this particular place, because they had a thick metal gate across the doors. To keep people from running.</p>
                <p>After several frantic minutes of explaining, gesturing, phone calls, and what I can only describe as <em>international panic</em>... he punched my number in manually.</p>
                <p><strong>Bingo.</strong> I was free.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The Ascent</span>
                <h3 class="section-title-panel">Cristo Redentor</h3>
                <p>Another time, I took the tram up to Christ the Redeemer. Got held up on the return trip. Because of course I did.</p>
                <p>But I made it to the top.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1768952612/IMG_6283_kikfgu.jpg" class="story-image" data-caption="Made it to the top - Cristo Redentor." alt="Derrick at Christ the Redeemer">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1768953058/IMG_6305_qqetec.jpg" class="story-image" data-caption="The view from Corcovado." alt="View from Christ the Redeemer">
                </div>
                <p class="photo-caption-inline">Christ the Redeemer watches over everything. Including lost musicians.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The Favela</span>
                <h3 class="section-title-panel">Into the Hills</h3>
                <p>We took a tour into the favelas - a side of Rio most tourists don't see.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768952929/IMG_6333_gg6lzs.jpg" class="story-image" data-caption="Heading into the heart of the favela." alt="Entering the favela">
                <p class="photo-caption-inline">Heading into the heart of the favela.</p>
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1768953014/IMG_6331_kvzk2o.jpg" class="story-image" data-caption="Life in the favela." alt="Favela street scene">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1768952486/IMG_6346_lcg34g.jpg" class="story-image" data-caption="Taking a break with a popsicle." alt="Derrick eating popsicle in favela">
                </div>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768952860/IMG_6350_kjpilj.jpg" class="story-image" data-caption="Another favela tour moment." alt="Favela tour">
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The Reward</span>
                <h3 class="section-title-panel">Finally, the Beach</h3>
                <p>Nothing was easy in Rio. Until I reached the beach and had a Corona.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768953816/IMG_6366_h1ih0q.jpg" class="story-image" data-caption="Copacabana Beach - where the chaos finally stops." alt="Copacabana Beach">
                <p class="photo-caption-inline">Copacabana. Worth every wrong turn.</p>
            </div>
            
            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about Rio de Janeiro</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🎭</span>
                        <span>The Marvelous City</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Cristo Redentor:</strong> Christ the Redeemer stands 98 feet tall (125 feet with its pedestal) atop Corcovado mountain. Completed in 1931, it took nine years to build and was named one of the New Seven Wonders of the World in 2007.</li>
                        <li><strong>Selarón Steps:</strong> Chilean artist Jorge Selarón began covering the steps in tiles in 1990 as a tribute to Brazil. By his death in 2013, the 215 steps featured over 2,000 tiles from 60+ countries. Artists and visitors still add tiles today.</li>
                        <li><strong>Copacabana Beach:</strong> This 2.5-mile crescent of sand sees over 2 million people on New Year's Eve for the world's largest beach party. The distinctive wave-pattern sidewalk was designed by Roberto Burle Marx in 1970.</li>
                        <li><strong>Favelas:</strong> Rio has over 1,000 favelas, home to roughly 1.5 million residents. Some date back to the 1890s when former soldiers had nowhere to live. Today they're vibrant communities with their own culture, music, and art scenes.</li>
                        <li><strong>Sugarloaf Cable Car:</strong> One of the world's oldest cable cars, running since 1912. The two-stage ride carries visitors 1,299 feet up Sugarloaf Mountain for panoramic views of the city and Guanabara Bay.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('rio')}

            ${generateGallery('rioLocal')}
        `,
        fullDesc: "Every time the ship docked in Rio, getting lost was inevitable. Something about this city wanted to keep you there. Credit cards that wouldn't work, trams that got held up, metal gates across restaurant doors. Nothing was easy - until finally reaching Copacabana and having a Corona.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769809159/20200209_075921_rvq35a.jpg"
    },
    {
        id: 130,
        title: "Armação dos Búzios, Brazil",
        coords: [-21.5, -40.5],
        tag: "Brazilian Riviera",
        icon: "🏖️",
        isDoor: false,
        shortDesc: "The St. Tropez of Brazil.",
        imagePosition: "center",
        useRichContent: true,
        richContent: `
            <div class="story-section-panel">
                <p>Búzios was a sleepy fishing village until Brigitte Bardot put it on the map in 1964. Now it's Brazil's answer to the French Riviera—cobblestone streets, boutique hotels, and over 20 beaches to choose from.</p>
                <p>The peninsula juts into the Atlantic, catching breezes from both sides. Each beach has its own personality: some wild and windswept, others calm and perfect for swimming.</p>
            </div>

            ${generateGallery('buzios')}
        `,
        fullDesc: "Búzios was a sleepy fishing village until Brigitte Bardot put it on the map in 1964. Now it's Brazil's answer to the French Riviera—cobblestone streets, boutique hotels, and over 20 beaches to choose from.",
        image: "./images/hero/buzios/IMG_6213.jpg"
    },
    {
        id: 46,
        title: "Portovenere, Italy",
        coords: [44.05, 9.84],
        tag: "Poet's Paradise",
        icon: "🏛️",
        isDoor: false,
        shortDesc: "Where Byron swam to visit Shelley.",
        imagePosition: "center",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">Gulf of Poets</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏛️</span>
                    <span class="demo-value">UNESCO Site</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">✍️</span>
                    <span class="demo-value">Byron's Grotto</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">⛪</span>
                    <span class="demo-value">San Pietro Church</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Through Ancient Stone</span>
                <h3 class="section-title-panel">Windows to the Sea</h3>
                <p>The fortress walls frame everything here. Ancient stone openings become perfect windows to the Ligurian coast - the same views that soldiers and poets have contemplated for centuries.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/portovenere/20150626_144805" class="story-image" data-caption="The Ligurian coast through fortress walls." alt="Coast through fortress window">
                <p class="photo-caption-inline">The coast framed by ancient stone - a view unchanged since the Middle Ages.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/portovenere/20150626_145445" class="story-image" data-caption="Medieval columns framing the sea." alt="Columns and sea">
                <p class="photo-caption-inline">Romanesque columns silhouetted against endless blue - sky melting into sea.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/portovenere/20150626_145933" class="story-image" data-caption="View through fortress opening." alt="Fortress view">
                <p class="photo-caption-inline">Every window tells a story of defense, beauty, and the eternal Mediterranean.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/portovenere/img_5595" class="story-image" data-caption="Looking out from the fortress." alt="Fortress overlook">
                <p class="photo-caption-inline">Lord Byron swam 5km across this bay to visit Shelley - you can see why.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Fortress</span>
                <h3 class="section-title-panel">Genoese Stronghold</h3>
                <p>The Castello Doria dominates the headland, built by Genoa to defend against Pisan raids. Its weathered towers and walls have watched over the gulf for eight centuries.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/portovenere/img_5598" class="story-image" data-caption="View across the Gulf of La Spezia." alt="Gulf view">
                <p class="photo-caption-inline">The Gulf of La Spezia spreads below - mountains, villages, and boats dotting the blue.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/portovenere/img_5601" class="story-image" data-caption="Coastal panorama from the fortress." alt="Panorama">
                <p class="photo-caption-inline">From up here, the Romantic poets found their inspiration.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/portovenere/img_5575" class="story-image" data-caption="Fortress tower with coastal views." alt="Fortress tower">
                <p class="photo-caption-inline">A weathered watchtower stands guard - eight centuries of salt wind and sun.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/portovenere/img_5560" class="story-image" data-caption="Dramatic coastline view." alt="Coastal view">
                <p class="photo-caption-inline">The Ligurian coast stretches toward Cinque Terre, cliffs plunging into impossibly blue water.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Walking the Town</span>
                <h3 class="section-title-panel">Medieval Colors</h3>
                <p>Beyond the fortress, Portovenere unfolds in layers of pastel and stone. The main piazza buzzes with visitors drawn to the same beauty that captivated Byron and Shelley.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/portovenere/20150626_143243" class="story-image" data-caption="The main piazza with colorful buildings and medieval tower." alt="Main piazza">
                <p class="photo-caption-inline">The piazza in full summer swing - cafes, palm trees, and the medieval tower standing watch.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/portovenere/20150626_145954" class="story-image" data-caption="Street scene in Portovenere." alt="Street scene">
                <p class="photo-caption-inline">Narrow streets wind between buildings painted in every shade of the Mediterranean palette.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/portovenere/20150626_145636" class="story-image" data-caption="Town architecture." alt="Town buildings">
                <p class="photo-caption-inline">Stone and stucco, shutters and flowers - the timeless Italian coastal village.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/portovenere/img_5553" class="story-image" data-caption="Village scene." alt="Village view">
                <p class="photo-caption-inline">Every corner reveals another postcard view.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/portovenere/img_5568" class="story-image" data-caption="Coastal architecture." alt="Coastal view">
                <p class="photo-caption-inline">The town hugs the rocky shore, buildings stacked up the hillside.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/portovenere/img_5574" class="story-image" data-caption="Fortress walls and pathways." alt="Fortress path">
                <p class="photo-caption-inline">Ancient pathways wind along the fortress walls.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/portovenere/img_5584" class="story-image" data-caption="Church domes against the sky." alt="Church domes">
                <p class="photo-caption-inline">Church domes rise against the Ligurian sky - San Lorenzo watching over the town.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/portovenere/img_5596" class="story-image" data-caption="Town overlook." alt="Town view">
                <p class="photo-caption-inline">Looking back at the fortress from the town below.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/portovenere/img_5599" class="story-image" data-caption="Coastal scenery." alt="Coast">
                <p class="photo-caption-inline">The endless blue that drew poets to call this the Gulf of Poets.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/portovenere/img_5607" class="story-image" data-caption="Village architecture." alt="Village">
                <p class="photo-caption-inline">Laundry dries on lines strung between centuries-old buildings.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/portovenere/img_5610" class="story-image" data-caption="Harbor views." alt="Harbor">
                <p class="photo-caption-inline">The harbor where fishing boats have moored for generations.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/portovenere/img_5611" class="story-image" data-caption="Final coastal view." alt="Coastal farewell">
                <p class="photo-caption-inline">One last look at the coast that inspired some of English literature's greatest poems.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/portovenere/img_5543" class="story-image" data-caption="Town square activity." alt="Square">
                <p class="photo-caption-inline">Summer crowds gather in the shade of the tower.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/portovenere/img_5541" class="story-image" data-caption="The colorful piazza." alt="Piazza">
                <p class="photo-caption-inline">Pink, orange, yellow - the Mediterranean palette on full display.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/portovenere/20150626_151743" class="story-image" data-caption="Farewell to Portovenere." alt="Farewell view">
                <p class="photo-caption-inline">The Gulf of Poets - where Byron swam, Shelley wrote, and D.H. Lawrence found peace.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about Portovenere</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🏛️</span>
                        <span>The Gulf of Poets</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Byron's Grotto:</strong> The sea cave where Lord Byron swam and meditated is now named Grotta Byron. He reportedly swam 5km across the bay to visit Shelley.</li>
                        <li><strong>UNESCO World Heritage:</strong> Portovenere, along with Cinque Terre and the islands, became a UNESCO site in 1997.</li>
                        <li><strong>Church of St. Peter:</strong> The striped Gothic church perched on the rocky headland dates to 1198, built on the ruins of an ancient temple.</li>
                        <li><strong>Palmaria Island:</strong> The largest island in Liguria sits just offshore, home to the Blue Grotto and abandoned military fortifications.</li>
                        <li><strong>The Gulf of Poets:</strong> This stretch of coast earned its nickname from the Romantic poets - Byron, Shelley, and D.H. Lawrence - who lived and wrote here.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('portovenere')}
        `,
        fullDesc: "Portovenere sits at the tip of a rugged peninsula, guarding the entrance to the Cinque Terre.\n\nLord Byron loved this place so much he swam across the bay to visit Shelley. The grotto where he contemplated the waves is now named for him. Pastel houses stack up the hillside, and the Church of St. Peter perches dramatically on the rocks.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/portovenere/img_5582"
    },
    {
        id: 47,
        title: "Hobart, Tasmania",
        coords: [-42.88, 147.33],
        tag: "Island at the Edge",
        icon: "🏔️",
        isDoor: false,
        useRichContent: true,
        shortDesc: "Australia's southern outpost, gateway to Antarctica.",
        fullDesc: "Hobart sits in the shadow of Mount Wellington, looking out toward the pole.\n\nThis is where Antarctic expeditions provision and where the cleanest air on Earth blows in from the Southern Ocean. The Saturday Salamanca Market is legendary. MONA, the underground art museum, is unlike anything else on the planet.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769521843/023_nckajd.jpg",
        richContent: `
            <div class="story-section-panel">
                <p>Hobart sits in the shadow of Mount Wellington, looking out toward the pole.</p>
                <p>This is where Antarctic expeditions provision and where the cleanest air on Earth blows in from the Southern Ocean. The Saturday Salamanca Market is legendary. MONA, the underground art museum, is unlike anything else on the planet.</p>
            </div>

            ${generateGallery('hobart')}
        `
    },
    {
        id: 48,
        title: "Saguenay, Canada",
        coords: [48.43, -71.07],
        tag: "The Fjord",
        icon: "🌲",
        isDoor: false,
        shortDesc: "Where whales come to the river.",
        fullDesc: "The Saguenay Fjord cuts deep into the Canadian Shield.\n\nBeluga whales gather where the cold fjord waters meet the St. Lawrence. The cliffs rise hundreds of feet on either side. In autumn, the forests explode in red and gold.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769521934/IMG_5899_nzg1xd.jpg"
    },
        {
        id: 50,
        title: "Florence, Italy",
        coords: [43.77, 11.25],
        tag: "Birthplace of the Renaissance",
        icon: "🎨",
        isDoor: false,
        shortDesc: "Where art and beauty were reinvented.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">🎨</span>
                    <span class="demo-value">Renaissance Heart</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🚢</span>
                    <span class="demo-value">From Livorno</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">⛪</span>
                    <span class="demo-value">The Duomo</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏛️</span>
                    <span class="demo-value">Medici Legacy</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Approach</span>
                <h3 class="section-title-panel">First Glimpse</h3>
                <p>You see it from blocks away. The dome rising above the terracotta rooftops, defying belief that anyone could build something so massive in the 1400s.</p>
                <p>Brunelleschi's dome. Over four million bricks. No wooden scaffolding. The largest masonry dome ever built. When I first walked through Florence's medieval streets and caught my first glimpse through the narrow lanes, I stopped dead. People pushed past. I didn't move.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/florence/ivkqnq0u0hzydgzt3x8b.jpg" class="story-image" data-caption="The crowds on Via dei Calzaiuoli - everyone drawn to the same masterpiece." alt="Florence street view with Duomo">
                <p class="photo-caption-inline">Via dei Calzaiuoli - everyone drawn toward the same masterpiece.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Piazza</span>
                <h3 class="section-title-panel">Piazza del Duomo</h3>
                <p>The piazza itself is overwhelming. The Cathedral of Santa Maria del Fiore. The Baptistery. Giotto's Campanile. All faced in the same pink, green, and white Tuscan marble.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/florence/ufgedwyqgznjp1lc9eqe.jpg" class="story-image" data-caption="The Piazza del Duomo - Baptistery under restoration with Brunelleschi's dome beyond." alt="Florence Duomo piazza">
                <p class="photo-caption-inline">The Baptistery was under scaffolding - the buildings here are always being restored, always preserved.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/florence/loyudpbij2pkjbswt6ck.jpg" class="story-image" data-caption="The Duomo facade - pink, green, and white marble." alt="Duomo facade">
                <p class="photo-caption-inline">The facade took 600 years to complete. Six hundred years.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Details</span>
                <h3 class="section-title-panel">Looking Up</h3>
                <p>Florence rewards those who look up. The details on every building, every doorway, every corner - the city is a museum without walls.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/florence/hsggthukftrjyjoua4ll.jpg" class="story-image" data-caption="Looking up at the Duomo - Gothic architecture reaching for the sky." alt="Duomo from below">
                <p class="photo-caption-inline">Looking up at the Duomo. The Gothic details overwhelming.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/florence/cmx8bmmxn1vxzx1a8pdu.jpg" class="story-image" data-caption="Giotto's Campanile beside the cathedral - 414 steps to the top." alt="Campanile and cathedral">
                <p class="photo-caption-inline">Giotto's Campanile. 414 steps to the top. Worth every one.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Inside</span>
                <h3 class="section-title-panel">The Sacred Interior</h3>
                <p>The outside of the Duomo prepares you for nothing. Inside, the scale is almost impossible to comprehend. The marble floor. The vaulted ceilings. The stained glass that has filtered Tuscan light for centuries.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/florence/xdb1cnzsejvwnfd2f8sh.jpg" class="story-image" data-caption="Inside the Duomo - soaring vaults and stained glass." alt="Duomo interior">
                <p class="photo-caption-inline">The interior. Vasari's frescoes in the dome above. Pure Renaissance ambition.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/florence/xt5eedzzl9i6juwsfxuo.jpg" class="story-image" data-caption="The marble floor - centuries of footsteps have polished these stones." alt="Duomo marble floor">
                <p class="photo-caption-inline">The marble floor. Geometric precision. Millions of footsteps over centuries have polished these stones smooth.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Streets</span>
                <h3 class="section-title-panel">Timeless Florence</h3>
                <p>Outside, the city continues. Horse carriages still circle the piazza. Sculptures peer from every niche. The Medici may be gone, but their city remains.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/florence/cc0zgndlgc9kitvgnnod.jpg" class="story-image" data-caption="Horse carriage in the piazza - timeless Florence." alt="Horse carriage at Duomo">
                <p class="photo-caption-inline">The horse carriages are for tourists, but they add something to the scene. A glimpse of how it must have looked.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/florence/d9kt2wakaxiwn4zeqo5c.jpg" class="story-image" data-caption="Renaissance sculpture - the masters are everywhere here." alt="Renaissance sculpture">
                <p class="photo-caption-inline">Sculpture everywhere. The Renaissance masters left their mark on every corner.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/florence/cohm7qm99uwvlazfwqwu.jpg" class="story-image" data-caption="Even the horses take a lunch break in Florence." alt="Horse feeding">
                <p class="photo-caption-inline">Even the horses get a lunch break. Everyone stops for food in Florence.</p>
            </div>

            ${generateGallery('florence', 'Photos from Florence')}
        `,
        fullDesc: "Every street corner in Florence holds a masterpiece.\n\nMichelangelo's David. Brunelleschi's dome. The Uffizi's treasures. The Medici built this city into a monument to human achievement. Walking across the Ponte Vecchio at sunset, you understand why artists have been coming here for six hundred years.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/florence/ivkqnq0u0hzydgzt3x8b.jpg"
    },
    {
        id: 51,
        title: "Stromboli, Italy",
        coords: [39.2, 15.6],
        tag: "Lighthouse of the Mediterranean",
        icon: "🌋",
        isDoor: false,
        shortDesc: "The volcano that never sleeps.",
        useRichContent: true,
        richContent: `
            <p>Stromboli has been erupting continuously for over 2,000 years.</p>
            <p>Sailors have used its glow to navigate these waters since ancient times - the "Lighthouse of the Mediterranean." We watched from the deck as plumes of smoke rose from the crater, the volcano breathing steadily as it has for millennia.</p>
            <p>The island itself is just the volcano - a few hundred people living on its slopes, trusting it to behave. At night, orange explosions light up the sky every few minutes.</p>

            ${generateGallery('stromboli')}
        `,
        fullDesc: "Stromboli has been erupting continuously for over 2,000 years. Sailors have used its glow to navigate these waters since ancient times. We watched from the deck as plumes of smoke rose from the crater.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/stromboli/volcano_smoking.jpg"
    },
    {
        id: 52,
        title: "San Remo, Italy",
        coords: [44.15, 8.3],
        tag: "City of Flowers",
        icon: "🌸",
        isDoor: false,
        shortDesc: "Riviera glamour and the Italian Song Festival.",
        imagePosition: "center",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">Italian Riviera</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🌸</span>
                    <span class="demo-value">Flower Capital</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🚴</span>
                    <span class="demo-value">Bike Path</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Riviera</span>
                <h3 class="section-title-panel">Where Italy Vacations</h3>
                <p>San Remo is where Italy comes to vacation.</p>
                <p>The Casino is legendary. The flower market supplies much of Europe. Every February, the Sanremo Music Festival launches Italian pop careers. The old town climbs the hillside in a tangle of medieval streets.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768951541/Screenshot_20260120_141120_Facebook_dfrf7x.jpg" class="story-image" data-caption="Bike riding along the San Remo coast." alt="Bike riding San Remo">
                <p class="photo-caption-inline">The coastal bike path - one of the best ways to see the Riviera.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about San Remo</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🌸</span>
                        <span>City of Flowers</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Flower Capital:</strong> San Remo's flower market is one of the largest in Europe, exporting millions of carnations, roses, and other blooms annually.</li>
                        <li><strong>Sanremo Music Festival:</strong> Italy's most important music competition has launched careers since 1951 - including Andrea Bocelli and Eros Ramazzotti.</li>
                        <li><strong>Casino:</strong> The Sanremo Casino opened in 1905 and remains one of only four legal casinos in Italy.</li>
                        <li><strong>Russian Connection:</strong> The Russian Orthodox church here was built for the many Russian nobles who wintered on the Riviera in the 19th century.</li>
                        <li><strong>Bike Path:</strong> The Pista Ciclabile runs 24km along the coast on a former railway line - one of Europe's most scenic cycling routes.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('sanRemo')}
        `,
        fullDesc: "San Remo is where Italy comes to vacation.\n\nThe Casino is legendary. The flower market supplies much of Europe. Every February, the Sanremo Music Festival launches Italian pop careers. The old town climbs the hillside in a tangle of medieval streets.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769810404/IMG_5475_cuf6vh.jpg"
    },
    {
        id: 53,
        title: "Roses, Spain",
        coords: [42.26, 3.18],
        tag: "Dalí's Coast",
        icon: "🎨",
        isDoor: false,
        shortDesc: "Where Catalonia meets the sea.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item"><span class="demo-icon">📍</span> Costa Brava, Catalonia</div>
                <div class="demo-item"><span class="demo-icon">👥</span> Pop: 20,000</div>
                <div class="demo-item"><span class="demo-icon">🍽️</span> Suquet de peix</div>
                <div class="demo-item"><span class="demo-icon">🎨</span> Dalí Country</div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Wild Coast</span>
                <h3 class="section-title-panel">The Bay of Roses</h3>
                <p>Roses sits on the Costa Brava—the "wild coast"—near where Salvador Dalí made his home. The bay is one of the most beautiful in the Mediterranean, a perfect crescent of blue water flanked by ancient hills.</p>
                <div class="image-row image-row-5">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/roses/img_5253" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/roses/img_5253" data-caption="View across the bay" alt="Bay view">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/roses/img_5249" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/roses/img_5249" data-caption="Roses harbor" alt="Harbor view">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/roses/img_5245" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/roses/img_5245" data-caption="Boats in the marina" alt="Marina">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/roses/20150623_115457" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/roses/20150623_115457" data-caption="Along the coast" alt="Coastal view">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/roses/img_5251" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/roses/img_5251" data-caption="The citadel walls" alt="Citadel">
                </div>
                <p class="photo-caption-inline">The bay has sheltered fishermen, Greeks, and dreamers for millennia.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Exploring</span>
                <h3 class="section-title-panel">A Town Between Sea and Mountain</h3>
                <p>El Bulli, once the world's best restaurant, was just down the road. The Greek ruins at Empúries are nearby. This corner of Catalonia punches above its weight. Walking through town, you feel the layers of history—Roman, medieval, modern—all coexisting under the Mediterranean sun.</p>
                <div class="image-row image-row-6">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/roses/img_5256" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/roses/img_5256" data-caption="Exploring the town" alt="Town street">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/roses/img_5257" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/roses/img_5257" data-caption="Local architecture" alt="Architecture">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/roses/img_5265" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/roses/img_5265" data-caption="Town scene" alt="Town scene">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/roses/img_5254" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/roses/img_5254" data-caption="Catalan details" alt="Details">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/roses/img_5246" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/roses/img_5246" data-caption="Along the promenade" alt="Promenade">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/roses/20150623_142632" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/roses/20150623_142632" data-caption="Afternoon wandering" alt="Afternoon">
                </div>
                <p class="photo-caption-inline">Where the Pyrenees meet the sea.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Local Flavors</span>
                <h3 class="section-title-panel">The Market at Roses</h3>
                <p>Catalan markets are legendary for a reason. The saucisson, the olives, the local cheeses—everything speaks to centuries of tradition. The Costa Brava has its own culinary identity, distinct from the rest of Spain, and every market stall tells that story.</p>
                <div class="image-row image-row-6">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/roses/img_5258" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/roses/img_5258" data-caption="Saucisson display" alt="Saucisson">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/roses/img_5259" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/roses/img_5259" data-caption="Market treasures" alt="Market goods">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/roses/img_5261" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/roses/img_5261" data-caption="Local specialties" alt="Specialties">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/roses/img_5262" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/roses/img_5262" data-caption="Catalan flavors" alt="Catalan goods">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/roses/img_5263" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/roses/img_5263" data-caption="Temptations everywhere" alt="Market stall">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/roses/img_5266" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/roses/img_5266" data-caption="Market memories" alt="Market scene">
                </div>
                <p class="photo-caption-inline">A feast for the senses in Dalí country.</p>
            </div>

            <p class="more-info-toggle" onclick="this.nextElementSibling.classList.toggle('expanded'); this.textContent = this.nextElementSibling.classList.contains('expanded') ? '− Less about Roses' : '+ More about Roses'">+ More about Roses</p>
            <div class="more-info-content">
                <p>Roses has been inhabited since the Neolithic period. The Greeks founded Rhode here in the 8th century BC—one of the earliest Greek settlements in Iberia. The citadel preserves layers of history from every era since.</p>
                <p>Salvador Dalí lived in nearby Cadaqués and Port Lligat, drawing endless inspiration from this dramatic coastline. The Cap de Creus peninsula, just to the east, is said to be the easternmost point of the Iberian Peninsula.</p>
            </div>

            ${generateGallery('roses')}
        `,
        fullDesc: "Roses sits on the Costa Brava-the 'wild coast'-near where Salvador Dalí made his home.\n\nThe bay is one of the most beautiful in the Mediterranean. The Greek ruins at Empúries are nearby. El Bulli, once the world's best restaurant, was just down the road. This corner of Catalonia punches above its weight.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/roses/img_5252"
    },
    {
        id: 54,
        title: "Propriano, Corsica",
        coords: [42.3, 8.4],
        tag: "Napoleon's Island",
        icon: "⛵",
        isDoor: false,
        shortDesc: "Wild beauty on the Isle of Beauty.",
        useRichContent: true,
        richContent: `
            <p>Corsica is France, but barely.</p>
            <p>The island has its own language, its own cuisine, its own fierce sense of identity. Propriano sits in the Gulf of Valinco, backed by mountains that drop straight to the sea. Napoleon was born just up the coast. The maquis - the fragrant scrubland - perfumes the air.</p>

            ${generateGallery('propriano')}
        `,
        fullDesc: "Corsica is France, but barely.\n\nThe island has its own language, its own cuisine, its own fierce sense of identity. Propriano sits in the Gulf of Valinco, backed by mountains that drop straight to the sea. Napoleon was born just up the coast. The maquis-the fragrant scrubland-perfumes the air.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769522398/IMG_20140607_120635_nogqsh.jpg"
    },
    {
        id: 55,
        title: "Marseille, France",
        coords: [43.30, 5.37],
        tag: "France's Port",
        icon: "⚓",
        isDoor: false,
        shortDesc: "Gritty, gorgeous, and unapologetically itself.",
        imagePosition: "center",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">Provence</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏛️</span>
                    <span class="demo-value">2,600 Years Old</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🍲</span>
                    <span class="demo-value">Bouillabaisse</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Old Port</span>
                <h3 class="section-title-panel">France's Oldest City</h3>
                <p>Marseille is France's oldest city and its most diverse.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768951551/Screenshot_20260120_140907_Facebook_kw0y1a.jpg" class="story-image" data-caption="The Old Port of Marseille with Fort Saint-Jean." alt="Marseille Old Port">
                <p class="photo-caption-inline">The Old Port - 2,600 years of maritime history.</p>
                <p>The Old Port has welcomed ships for 2,600 years. The bouillabaisse is non-negotiable. The Calanques - limestone cliffs plunging into turquoise water - rival any coastline in the world.</p>
                <p>This isn't Paris. Marseille doesn't care.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/marseille/20150809_102506" class="story-image" data-caption="Fort Saint-Jean guards the harbor entrance." alt="Fort Saint-Jean">
                <p class="photo-caption-inline">Fort Saint-Jean - where the Mediterranean meets 800 years of history.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">MuCEM</span>
                <h3 class="section-title-panel">Where Mediterranean Cultures Converge</h3>
                <p>The Museum of European and Mediterranean Civilizations opened in 2013, a striking cube of latticed concrete connected to Fort Saint-Jean by a dramatic footbridge. Inside, 2,600 years of Mediterranean civilization unfold.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/marseille/img_20140606_093315" class="story-image" data-caption="MuCEM - the latticed cube that redefined Marseille's waterfront." alt="MuCEM exterior">
                <p class="photo-caption-inline">MuCEM's striking architecture drew me in from the port.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/marseille/img_20140606_123656" class="story-image" data-caption="Ancient water wheel - Mediterranean engineering preserved." alt="Water wheel">
                <p class="photo-caption-inline">Ancient engineering - a water wheel that once sustained life around the sea.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/marseille/img_20140606_130225" class="story-image" data-caption="Navigation instruments - astrolabes and sextants." alt="Navigation instruments">
                <p class="photo-caption-inline">The tools that made Mediterranean trade possible - astrolabes, sextants, the mathematics of the sea.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/marseille/img_20140606_131050" class="story-image" data-caption="Carnival costumes from across Europe and the Mediterranean." alt="Carnival costumes">
                <p class="photo-caption-inline">The carnival exhibit was beautifully unsettling - centuries of masks and ritual.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Climb</span>
                <h3 class="section-title-panel">Walking to La Bonne Mère</h3>
                <p>Every Marseillais knows her - Notre Dame de la Garde, "La Bonne Mère," the Good Mother who watches over the city from her hilltop perch. You can take the tourist train. You can take the bus. Or you can walk, like I did, straight up from the port.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/marseille/20150711_150950" class="story-image" data-caption="The Old Port with Notre Dame de la Garde visible on the hill." alt="Old Port with basilica">
                <p class="photo-caption-inline">From the port, she's always there - golden statue glinting in the sun. The walk calls.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/marseille/20150809_103456" class="story-image" data-caption="Street signs pointing to Notre Dame de la Garde." alt="Direction signs">
                <p class="photo-caption-inline">The signs point upward. Always upward.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/marseille/20150809_104124" class="story-image" data-caption="Notre Dame de la Garde emerges through the trees." alt="Basilica through trees">
                <p class="photo-caption-inline">Through the pines, she appears - closer with every switchback.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/marseille/20150809_111645" class="story-image" data-caption="View from Notre Dame de la Garde to the Frioul islands." alt="Island view">
                <p class="photo-caption-inline">At the top, the reward: the Frioul islands, Château d'If, the whole Mediterranean spread below.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/marseille/20150809_113332" class="story-image" data-caption="Tourists on the terrace at Notre Dame de la Garde." alt="Summit terrace">
                <p class="photo-caption-inline">Everyone catches their breath here. The climb is worth every step.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/marseille/img_5518" class="story-image" data-caption="Notre Dame de la Garde - La Bonne Mère watches over Marseille." alt="Notre Dame de la Garde">
                <p class="photo-caption-inline">La Bonne Mère - the Good Mother. For 850 years, she's watched over sailors, fishermen, and wanderers like me.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about Marseille</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">⚓</span>
                        <span>France's Mediterranean Soul</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Founded by Greeks:</strong> Marseille was founded as Massalia by Greek sailors from Phocaea around 600 BC, making it France's oldest city.</li>
                        <li><strong>MuCEM:</strong> The Museum of European and Mediterranean Civilizations opened in 2013, connected to Fort Saint-Jean by a dramatic footbridge.</li>
                        <li><strong>Bouillabaisse Rules:</strong> The authentic fish stew has strict rules - it must contain at least four types of local fish and be served with rouille and croutons.</li>
                        <li><strong>Calanques:</strong> The Calanques National Park protects 20km of dramatic limestone cliffs and turquoise coves between Marseille and Cassis.</li>
                        <li><strong>Château d'If:</strong> The island fortress made famous by The Count of Monte Cristo is a 20-minute ferry ride from the Old Port.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('marseille')}
        `,
        fullDesc: "Marseille is France's oldest city and its most diverse.\n\nThe Old Port has welcomed ships for 2,600 years. The bouillabaisse is non-negotiable. The Calanques-limestone cliffs plunging into turquoise water-rival any coastline in the world. This isn't Paris. Marseille doesn't care.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769803210/IMG_20140606_110847_b49lhd.jpg"
    },
    {
        id: 56,
        title: "Le Lavandou, France",
        coords: [43.14, 6.37],
        tag: "Twelve Beaches",
        icon: "🏖️",
        isDoor: false,
        shortDesc: "A dozen different beaches on one small stretch.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item"><span class="demo-icon">📍</span> Côte d'Azur, Var</div>
                <div class="demo-item"><span class="demo-icon">👥</span> Pop: 5,800</div>
                <div class="demo-item"><span class="demo-icon">🏖️</span> 12 Beaches</div>
                <div class="demo-item"><span class="demo-icon">🌿</span> Lavender Coast</div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Coast</span>
                <h3 class="section-title-panel">Twelve Beaches, Twelve Moods</h3>
                <p>Le Lavandou is named for the lavender that once grew on these hills. The town claims twelve distinct beaches, each with its own character—from the golden sand of Grande Plage to the secluded coves hidden beneath the pines.</p>
                <div class="image-row image-row-5">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/le-lavandou/img_20140605_122522" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/le-lavandou/img_20140605_122522" data-caption="Arriving in Le Lavandou" alt="Arrival">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/le-lavandou/20150807_124809" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/le-lavandou/20150807_124809" data-caption="The Mediterranean shore" alt="Shore">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/le-lavandou/img_20140605_134242" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/le-lavandou/img_20140605_134242" data-caption="Côte d'Azur views" alt="Coast view">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/le-lavandou/img_20140605_135015" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/le-lavandou/img_20140605_135015" data-caption="Beach day" alt="Beach">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/le-lavandou/20150613_130635" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/le-lavandou/20150613_130635" data-caption="The waterfront" alt="Waterfront">
                </div>
                <p class="photo-caption-inline">The Îles d'Hyères float on the horizon, beckoning day-trippers.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Town</span>
                <h3 class="section-title-panel">Where Painters Found the Light</h3>
                <p>The light here attracted painters long before the tourists came. Théo van Rysselberghe, the Belgian neo-impressionist, made his home here. The town still feels like a secret—unhurried, authentic, a world away from the glamour of Saint-Tropez just up the coast.</p>
                <div class="image-row image-row-5">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/le-lavandou/20150613_131906" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/le-lavandou/20150613_131906" data-caption="Town streets" alt="Town">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/le-lavandou/20150613_135211" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/le-lavandou/20150613_135211" data-caption="Afternoon exploring" alt="Exploring">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/le-lavandou/20150613_190342" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/le-lavandou/20150613_190342" data-caption="Evening light" alt="Evening">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/le-lavandou/20150613_134743" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/le-lavandou/20150613_134743" data-caption="Local color" alt="Local scene">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/le-lavandou/20150611_104847" class="inline-image" data-full="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1600,q_auto,f_auto/shiplife/le-lavandou/20150611_104847" data-caption="Le Lavandou charm" alt="Town charm">
                </div>
                <p class="photo-caption-inline">A quieter corner of the Côte d'Azur.</p>
            </div>

            <p class="more-info-toggle" onclick="this.nextElementSibling.classList.toggle('expanded'); this.textContent = this.nextElementSibling.classList.contains('expanded') ? '− Less about Le Lavandou' : '+ More about Le Lavandou'">+ More about Le Lavandou</p>
            <div class="more-info-content">
                <p>Le Lavandou's name likely comes from "lavadou"—a Provençal word for laundry washhouse—though the lavender legend persists. The fishing village began welcoming artists in the late 19th century, drawn by the extraordinary Mediterranean light.</p>
                <p>The twelve beaches stretch from the town center to the Cap Bénat, each with its own personality. The offshore islands—Porquerolles, Port-Cros, and Île du Levant—are now a national park, preserving some of the last unspoiled coastline on the French Riviera.</p>
            </div>

            ${generateGallery('lavandou')}
        `,
        fullDesc: "Le Lavandou is named for the lavender that once grew on these hills.\n\nThe town claims twelve distinct beaches, each with its own character. The Îles d'Hyères float offshore. The light here attracted painters long before the tourists came.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/le-lavandou/img_20140605_134218"
    },
    {
        id: 57,
        title: "Monte Carlo, Monaco",
        coords: [43.74, 7.43],
        tag: "Playground of the Rich",
        icon: "🎰",
        isDoor: false,
        shortDesc: "Where fortunes are won and lost in style.",
        imagePosition: "center",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">2 km² Country</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🎰</span>
                    <span class="demo-value">Casino Square</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏎️</span>
                    <span class="demo-value">Grand Prix</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🛥️</span>
                    <span class="demo-value">Superyachts</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The View</span>
                <h3 class="section-title-panel">Two Square Kilometers of Dreams</h3>
                <p>Monaco is the world's second-smallest country, and from the palace heights you can see almost all of it at once. Superyachts crowd the harbor. High-rises cling to every available cliff face. Wealth compressed into an impossible density.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_20140702_114207" class="story-image" data-caption="Monaco's harbor from above - superyachts and cruise ships fill the bay." alt="Monaco harbor panorama">
                <p class="photo-caption-inline">The harbor from above - where cruise ships anchor alongside private megayachts.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_7116" class="story-image" data-caption="Tourists gather at the palace viewpoint to take in the spectacle." alt="Palace viewpoint">
                <p class="photo-caption-inline">Every visitor makes the pilgrimage to this view. It never disappoints.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Harbor</span>
                <h3 class="section-title-panel">Where Fortunes Float</h3>
                <p>Port Hercule is where the serious money docks. Rows of superyachts line up like trophies, each one worth more than most people will earn in a lifetime. The palace rock rises behind them, a reminder that royalty still rules here.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_4805" class="story-image" data-caption="Luxury yachts moored beneath the palace rock." alt="Yachts and palace">
                <p class="photo-caption-inline">The palace watches over its floating subjects.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_7158" class="story-image" data-caption="A Lürssen superyacht complete with its own helicopter." alt="Superyacht with helicopter">
                <p class="photo-caption-inline">When your yacht has its own helicopter, you've arrived. A Lürssen megayacht in the harbor.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Casino</span>
                <h3 class="section-title-panel">Where Luck Is a Lifestyle</h3>
                <p>The Monte Carlo Casino isn't just a building - it's a temple to chance, designed by the same architect who built the Paris Opera. The gardens in front are immaculate. The cars pulling up are always exotic. Inside, fortunes change hands over green felt.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_7140" class="story-image" data-caption="The Casino de Monte-Carlo and its famous gardens." alt="Casino and gardens">
                <p class="photo-caption-inline">The Casino de Monte-Carlo - where Belle Époque architecture meets modern excess.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_7136" class="story-image" data-caption="The ornate facade of the Monte Carlo Casino." alt="Casino facade">
                <p class="photo-caption-inline">Ironically, Monegasque citizens are forbidden from gambling in their own casino.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Streets</span>
                <h3 class="section-title-panel">Belle Époque Glamour</h3>
                <p>Away from the waterfront, Monaco's streets are lined with Belle Époque architecture - wrought iron balconies, pastel facades, and buildings that seem to defy the steep terrain. Old churches sit in the shadow of glass towers.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_4790" class="story-image" data-caption="A typical Monaco street - Belle Époque elegance." alt="Monaco street">
                <p class="photo-caption-inline">Even the side streets feel like a film set.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_4782" class="story-image" data-caption="Looking down toward the harbor, the cruise ship waiting." alt="Street to harbor">
                <p class="photo-caption-inline">Every street seems to lead back to the sea - and your ship waiting in the harbor.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_7152" class="story-image" data-caption="A small chapel dwarfed by modern towers above." alt="Chapel and towers">
                <p class="photo-caption-inline">Old and new collide constantly - a historic chapel beneath towering apartments carved into the cliff.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Grand Prix</span>
                <h3 class="section-title-panel">Racing Through the Streets</h3>
                <p>Every May, Formula 1 transforms these streets into the world's most glamorous racetrack. The barriers stay up year-round in some places. Even when the cars aren't racing, you can trace the famous circuit through town.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_4783" class="story-image" data-caption="Grand Prix ticket booth with F1 cars on display." alt="Grand Prix booth">
                <p class="photo-caption-inline">The Grand Prix is never far from anyone's mind here.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_4784" class="story-image" data-caption="The Monaco Grand Prix circuit map - through city streets and tunnel." alt="Circuit map">
                <p class="photo-caption-inline">The circuit winds through the streets where you're walking - 78 laps, 260 km/h, inches from the barriers.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_4791" class="story-image" data-caption="Race cars on the Monaco circuit - visible through the barriers." alt="Grand Prix racing">
                <p class="photo-caption-inline">The barriers go up, the cars scream through - and you're close enough to feel the heat.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Gardens</span>
                <h3 class="section-title-panel">Sculpture and Sea</h3>
                <p>Monaco's gardens are unexpected treasures - sculptures tucked among Mediterranean plants, viewpoints over the sea, and reminders that this tiny nation takes its culture seriously.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_5618" class="story-image" data-caption="Cannonballs stacked on the old fortress walls, the city below." alt="Fortress cannons">
                <p class="photo-caption-inline">Old fortress cannons overlook the modern principality - a reminder of Monaco's strategic past.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_5630" class="story-image" data-caption="An octopus sculpture in the palace gardens." alt="Octopus sculpture">
                <p class="photo-caption-inline">Prince Albert's commitment to ocean conservation shows up in unexpected places.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_20140702_101103" class="story-image" data-caption="Cousteau's yellow submarine outside the Oceanographic Museum." alt="Cousteau submarine">
                <p class="photo-caption-inline">Jacques Cousteau directed the Oceanographic Museum for over 30 years. His legacy is everywhere.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_20140702_124632" class="story-image" data-caption="Hermes by Arman (1987) in the gardens." alt="Hermes sculpture">
                <p class="photo-caption-inline">Modern art meets Mediterranean gardens - Arman's Hermes stands watch over the sea.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_5636" class="story-image" data-caption="Romantic sculpture surrounded by flowers in the gardens." alt="Garden sculpture">
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Pleasures</span>
                <h3 class="section-title-panel">French Indulgence</h3>
                <p>Despite the principality's independence, French culture dominates - especially in the food. The cheese shops and patisseries could be in Paris, but with Riviera prices.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_4799" class="story-image" data-caption="A Monaco cheese shop - dozens of varieties." alt="Cheese shop">
                <p class="photo-caption-inline">A proper cheese selection. This is still France, after all - or close enough.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_4800" class="story-image" data-caption="French pastries in a Monaco patisserie." alt="Pastry display">
                <p class="photo-caption-inline">Every pastry is a small work of art. The prices reflect the zip code.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_20140702_115517" class="story-image" data-caption="Lunch in Monaco - lasagna, salad, and white wine." alt="Monaco lunch">
                <p class="photo-caption-inline">A proper Monaco lunch. The prices match the view.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Excess</span>
                <h3 class="section-title-panel">Where Normal Rules Don't Apply</h3>
                <p>In Monaco, a Ferrari parked on the street barely warrants a second glance. Superyachts with helipads are routine. This is a place where excess is the baseline, and ordinary wealth is invisible.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_4807" class="story-image" data-caption="A red Ferrari 458 parked casually on a Monaco street." alt="Ferrari">
                <p class="photo-caption-inline">Just another car parked on a Monaco street. Here, this is ordinary.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_4768" class="story-image" data-caption="White Rolls-Royce Phantom Drophead with custom chrome wheels." alt="Rolls-Royce">
                <p class="photo-caption-inline">A Rolls-Royce Phantom Drophead - because why not?</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_5613" class="story-image" data-caption="Amadeus (70m) and Dubai (162m) - legendary superyachts side by side." alt="Amadeus and Dubai superyachts">
                <p class="photo-caption-inline">The expedition yacht Amadeus beside Dubai - one of the world's largest private yachts at 162 meters.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_20140602_092703" class="story-image" data-caption="Lady Moura - her name spelled in 24-karat gold." alt="Lady Moura superyacht">
                <p class="photo-caption-inline">Lady Moura - 105 meters of floating opulence. Her name is spelled out in solid gold lettering.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about Monaco</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🎰</span>
                        <span>The World's Playground</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Tiny Nation:</strong> Monaco is the world's second-smallest country (after Vatican City) at just 2.02 km² - smaller than Central Park.</li>
                        <li><strong>No Income Tax:</strong> Monaco has no income tax for residents, attracting the ultra-wealthy from around the world.</li>
                        <li><strong>Casino History:</strong> The Monte Carlo Casino opened in 1863. Ironically, Monegasque citizens are forbidden from gambling there.</li>
                        <li><strong>Grand Prix:</strong> The Monaco GP has run since 1929, with cars reaching 260 km/h through narrow streets just meters from the harbor.</li>
                        <li><strong>Grace Kelly:</strong> American actress Grace Kelly became Princess of Monaco in 1956 after marrying Prince Rainier III.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('monte-carlo')}
        `,
        fullDesc: "Monaco is two square kilometers of concentrated wealth.\n\nThe Casino is palatial. The Grand Prix tears through the streets every May. The yachts in the harbor cost more than most neighborhoods. It's absurd and glamorous and nothing quite like anywhere else.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/monte-carlo/img_20140702_114207"
    },
    {
        id: 58,
        title: "Corfu, Greece",
        coords: [39.62, 19.92],
        tag: "The Venetian Island",
        icon: "🏛️",
        isDoor: false,
        shortDesc: "Greek island with an Italian accent.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">🦁</span>
                    <span class="demo-value">400 Years Venetian</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏰</span>
                    <span class="demo-value">Old Fortress</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">☦️</span>
                    <span class="demo-value">Byzantine Heritage</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">📖</span>
                    <span class="demo-value">Durrell's Island</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Fortress</span>
                <h3 class="section-title-panel">Venice's Eastern Outpost</h3>
                <p>The Old Fortress dominates the town - a Venetian stronghold built to guard the entrance to the Adriatic. Corfu passed through many hands - Byzantine, Venetian, French, British - before finally becoming Greek in 1864.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/corfu/img_4684" class="story-image" data-caption="The Venetian moat with boats." alt="Fortress moat">
                <p class="photo-caption-inline">The moat between old and new fortress - once a defense, now a quiet marina.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/corfu/img_4691" class="story-image" data-caption="Inside the fortress walls." alt="Fortress interior">
                <p class="photo-caption-inline">Inside the fortress walls - layers of history from Byzantine to British.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/corfu/img_4692" class="story-image" data-caption="Fortress architecture." alt="Fortress view">
                <p class="photo-caption-inline">Venetian engineering built to withstand Ottoman sieges.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/corfu/img_4702" class="story-image" data-caption="Clock tower and colorful buildings." alt="Town view">
                <p class="photo-caption-inline">The clock tower rises above pastel buildings - Greek, Venetian, British all at once.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/corfu/img_4705" class="story-image" data-caption="Fortress ramparts with cannons." alt="Fortress cannons">
                <p class="photo-caption-inline">Cannons still guard the ramparts, pointed at an enemy that never comes.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/corfu/img_4679" class="story-image" data-caption="Harbor view from the fortress." alt="Harbor view">
                <p class="photo-caption-inline">The harbor spreads below - this is Greece, but not quite.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Museum</span>
                <h3 class="section-title-panel">Byzantine Collection of Corfu</h3>
                <p>Inside the fortress, the Byzantine Collection houses treasures from Corfu's thousand years under the Eastern Empire. Icons, frescoes, the Winged Lion of St. Mark - layers of faith and power preserved in stone and gold.</p>
                <div class="world-carousel" id="byzantineCarousel">
                    <div class="carousel-slide active">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/corfu/img_4686" alt="Byzantine Collection entrance">
                        <div class="carousel-caption"><span>Byzantine Collection of Corfu - museum entrance</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/corfu/img_4687" alt="Museum interior with frescoes">
                        <div class="carousel-caption"><span>Byzantine frescoes and illuminated manuscripts</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/corfu/img_4694" alt="Fortress arcades">
                        <div class="carousel-caption"><span>Venetian arcades beneath the fortress rock</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/corfu/img_4696" alt="Stone medallion">
                        <div class="carousel-caption"><span>Byzantine stone relief - centuries of devotion</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/corfu/img_4697" alt="Museum artifact">
                        <div class="carousel-caption"><span>Artifacts from a thousand years of faith</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/corfu/img_4698" alt="Winged Lion of St. Mark">
                        <div class="carousel-caption"><span>The Winged Lion of St. Mark - Venice's calling card</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/corfu/img_4699" alt="Museum display">
                        <div class="carousel-caption"><span>Stone carvings from Byzantine churches</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/corfu/img_4700" alt="Greek inscription">
                        <div class="carousel-caption"><span>Historical Greek decree - the Ionian Islands join Greece</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/corfu/img_4701" alt="Museum piece">
                        <div class="carousel-caption"><span>Treasures from Corfu's long history</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/corfu/img_4703" alt="Clock tower">
                        <div class="carousel-caption"><span>The clock tower against a brooding sky</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/corfu/img_4705" alt="Fortress view">
                        <div class="carousel-caption"><span>Cannons guard the Venetian ramparts</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/corfu/img_4706" alt="Fortress grounds">
                        <div class="carousel-caption"><span>Walking the fortress grounds</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/corfu/img_4707" alt="Fortress architecture">
                        <div class="carousel-caption"><span>Venetian military architecture</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/corfu/img_4708" alt="Fortress view">
                        <div class="carousel-caption"><span>Centuries of defense against Ottoman siege</span></div>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/corfu/img_4709" alt="Final fortress view">
                        <div class="carousel-caption"><span>The fortress that kept Corfu free</span></div>
                    </div>
                </div>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about Corfu</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🦁</span>
                        <span>Kerkyra - The Venetian Isle</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Venetian Rule:</strong> Venice controlled Corfu from 1386 to 1797 - over 400 years that shaped its architecture and culture.</li>
                        <li><strong>Never Conquered:</strong> Corfu is one of the few Greek islands never occupied by the Ottoman Turks, thanks to its Venetian fortifications.</li>
                        <li><strong>British Period:</strong> From 1815-1864, Corfu was a British protectorate. The British built roads, a water system, and left behind cricket.</li>
                        <li><strong>Gerald Durrell:</strong> The naturalist and author grew up on Corfu in the 1930s, chronicled in "My Family and Other Animals."</li>
                        <li><strong>Empress Sissi:</strong> Empress Elisabeth of Austria built the Achilleion Palace here as her retreat from the Hapsburg court.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('corfu')}
        `,
        fullDesc: "Corfu was Venetian for four hundred years, and it shows. The old town has more in common with Venice than Athens. Gerald Durrell grew up here. The Empress Sissi built her palace on the hill.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/corfu/img_4711"
    },
    {
        id: 59,
        title: "Celukan Bawang, Indonesia",
        coords: [-8.15, 114.85],
        tag: "Hidden Bali",
        icon: "🌺",
        isDoor: false,
        useRichContent: true,
        shortDesc: "The Bali tourists don't see.",
        fullDesc: "On Bali's quiet north coast, life moves at a different pace. No crowds, no clubs—just fishing villages, black sand beaches, and terraced rice paddies climbing the volcanic slopes.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769522980/IMG_4038_uylyls.jpg",
        richContent: `
            <div class="story-section-panel">
                <span class="section-tag-panel">The North</span>
                <h3 class="section-title-panel">Real Bali</h3>
                <p>The tourists go to Kuta, Seminyak, Ubud. The cruise ships anchor off Celukan Bawang, on the north coast, where the old Bali still exists.</p>
                <p>Here the beaches are black volcanic sand, the roads wind through rice terraces, and temples outnumber hotels a hundred to one.</p>
                <p>It's what the whole island looked like before the world discovered it. Which is both beautiful and bittersweet.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Pace</span>
                <h3 class="section-title-panel">Slower</h3>
                <p>South Bali runs on tourism time—24/7 hustle, traffic jams, Instagram opportunities. The north runs on Bali time.</p>
                <p>Fishing boats launch at dawn. Offerings appear at shrines each morning. Rice paddies change color with the seasons.</p>
                <p>It's not untouched—nothing in Bali is untouched anymore—but it remembers what it used to be.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about this location</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🌺</span>
                        <span>North Bali</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>The Temples:</strong> North Bali has some of the island's oldest temples, including Pura Beji with its ornate carvings.</li>
                        <li><strong>Hot Springs:</strong> Volcanic hot springs dot the hillsides—natural spas with mountain views.</li>
                        <li><strong>Dolphins:</strong> Lovina Beach is famous for dawn dolphin-watching trips.</li>
                        <li><strong>The Divide:</strong> Mountains separate north from south—different weather, different vibe, different Bali.</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        id: 60,
        title: "Penang, Malaysia",
        coords: [5.42, 100.33],
        tag: "Pearl of the Orient",
        icon: "🍜",
        isDoor: false,
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">🕐</span>
                    <span class="demo-value">12 Hours</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🚗</span>
                    <span class="demo-value">Hired Driver</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🛕</span>
                    <span class="demo-value">Temples</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">⛰️</span>
                    <span class="demo-value">Penang Hill</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Arriving</span>
                <h3 class="section-title-panel">Mariner of the Seas</h3>
                <p>We spotted the Mariner of the Seas as we were pulling in to dock. Twelve hours to explore Penang and absolutely no idea what to do with them.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/penang/penang-03-mariner-of-seas" class="story-image" data-caption="The Mariner of the Seas in port as we arrived." alt="Mariner of the Seas">
                <p class="photo-caption-inline">The Mariner of the Seas in port as we arrived.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Solution</span>
                <h3 class="section-title-panel">Hire a Driver</h3>
                <p>So I did what all crew members do when they're in this situation: hired a driver to take me as far away from port as he could. This guy had a hundred different places he could show me, and we drove all over visiting shrines and temples.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/penang/penang-47-colorful" class="story-image" data-caption="Kek Lok Si Temple - one of the largest Buddhist temples in Southeast Asia." alt="Kek Lok Si Temple">
                <p class="photo-caption-inline">Kek Lok Si Temple - one of the largest Buddhist temples in Southeast Asia.</p>
                <p>First stop: <em>Kek Lok Si</em>, the "Temple of Supreme Bliss." Founded in 1890 by Hokkien immigrants, it sprawls across a hillside in Air Itam. The seven-story Pagoda of Ten Thousand Buddhas rises above everything, fusing Chinese, Thai, and Burmese architectural styles. But it's the 30-meter bronze statue of Kuan Yin—the Goddess of Mercy—that dominates the skyline, completed in 2002 after twelve years of construction. You can see her serene face from miles away, watching over Penang with that tilted, knowing expression.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Cultural Immersion</span>
                <h3 class="section-title-panel">Colors Like Never Before</h3>
                <p>Colors like I had never seen before. So culturally different was this city that I was left stunned and amazed at what I had seen. The shrines and temples seemed endless, each more vibrant than the last.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/penang/penang-15-colorful" class="story-image" data-caption="Every surface alive with color." alt="Colorful temple">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/penang/penang-18-temple" class="story-image" data-caption="Intricate temple details." alt="Temple details">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/penang/penang-24-temple" class="story-image" data-caption="Stunned and amazed." alt="Temple">
                <p class="photo-caption-inline">Every shrine more vibrant than the last.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">In a Daze</span>
                <h3 class="section-title-panel">A Kaleidoscope of Temples</h3>
                <p>My guide didn't speak English very well, but it was better than my Hokkien. The locals call this place <em>Pī-néng</em> in the Hokkien dialect—the language of the Chinese immigrants who helped build George Town into a trading powerhouse. We communicated through gestures and pointing as he led me through temple after temple, each one more ornate than the last.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/penang/penang-26-colorful" class="story-image" data-caption="Another kaleidoscopic scene." alt="Temple scene">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/penang/penang-29-colorful" class="story-image" data-caption="Wandering in a daze of color." alt="Temple scene">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/penang/penang-33-colorful" class="story-image" data-caption="Every angle revealed something new." alt="Temple scene">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/penang/penang-37-colorful" class="story-image" data-caption="Lost in the visual overload." alt="Temple scene">
                <p class="photo-caption-inline">Wandering in a daze of color.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Lunch</span>
                <h3 class="section-title-panel">Mystery Meal</h3>
                <p>I managed to get across to my driver that I was hungry and he acknowledged by speeding off up a mountain and dropping me in front of this tiny store where I had a bowl of prawn and pork rib broth with thick yellow noodles. I didn't know exactly what I was ordering but it was a delicious surprise.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/penang/penang-45-food-place" class="story-image" data-caption="Hokkien mee - the signature dish of Penang." alt="Hokkien mee">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/penang/penang-46-food-place" class="story-image" data-caption="A delicious surprise." alt="Lunch in Penang">
                <p class="photo-caption-inline">Penang's famous <em>Hokkien mee</em> - worth the detour up the mountain.</p>
                <p>Penang has been called the street food capital of Asia, and now I understood why. Chinese, Malay, Indian, and Thai influences all collide in the hawker centers, creating something entirely its own.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">More Temples</span>
                <h3 class="section-title-panel">The Tour Continues</h3>
                <p>After lunch, more colorful places. I was in a daze visiting all of these temples, each one more elaborate than the last. The statues, the architecture, the sheer density of visual detail—overwhelming in the best way.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/penang/penang-49-colorful" class="story-image" data-caption="More visual overload." alt="Temple scene">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/penang/penang-51-colorful" class="story-image" data-caption="Elaborate details everywhere." alt="Temple scene">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/penang/penang-53-colorful" class="story-image" data-caption="Wandering in a daze." alt="Temple scene">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/penang/penang-63-colorful" class="story-image" data-caption="Continuing the colorful journey." alt="Temple scene">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/penang/penang-64-colorful" class="story-image" data-caption="One of many memorable moments." alt="Temple scene">
                <p class="photo-caption-inline">Overwhelming in the best way.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Penang Hill</span>
                <h3 class="section-title-panel">The Ascent</h3>
                <p>Then we headed up Penang Hill—<em>Bukit Bendera</em> in Malay. At 833 meters, it's been a retreat from the tropical heat since the 1780s when British colonials first established it as a hill station. They used to be carried up in sedan chairs by teams of porters. In 1923, the Swiss-built funicular railway opened, one of the steepest tunnel railways in the world.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/penang/penang-88-hill-ascent" class="story-image" data-caption="Beginning the ascent up Penang Hill." alt="Penang Hill ascent">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/penang/penang-89-penang-hill" class="story-image" data-caption="Making our way up." alt="Penang Hill">
                <p class="photo-caption-inline">The funicular climbs through jungle to the summit.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Views</span>
                <h3 class="section-title-panel">Mind Blown</h3>
                <p>But the overlook blew my mind. From the top of Penang Hill, the entire island spread out below—the city, the strait, the ships in port. Everything I'd seen that day suddenly made sense from up here.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/penang/penang-65-overlook" class="story-image" data-caption="The view that blew my mind." alt="Overlook view">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/penang/penang-67-overlook" class="story-image" data-caption="Looking out over the island." alt="Overlook view">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/penang/penang-68-overlook" class="story-image" data-caption="The strait and the city below." alt="Overlook view">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/penang/penang-83-overlook" class="story-image" data-caption="Everything visible from the top." alt="Overlook view">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/penang/penang-84-overlook" class="story-image" data-caption="A day well spent." alt="Overlook view">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/penang/penang-91-hilltop-view" class="story-image" data-caption="Views from the summit." alt="Hilltop view">
                <p class="photo-caption-inline">Views from the summit of Penang Hill.</p>
            </div>

            ${typeof generateGallery === 'function' ? generateGallery('penang') : ''}
        `,
        fullDesc: "Twelve hours to explore Penang and no idea what to do. So I hired a driver.\n\nHe took me to temples I didn't know existed, colors I'd never seen, food I couldn't identify. Then up Penang Hill for views that put it all in perspective. One of the most overwhelming sensory days of my life.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/penang/penang-73-overlook"
    },
    {
        id: 61,
        title: "Dubai, UAE",
        coords: [25.20, 55.27],
        tag: "City of the Future",
        icon: "🏙️",
        isDoor: false,
        shortDesc: "Where ambition knows no limits.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">🏙️</span>
                    <span class="demo-value">Burj Khalifa</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏝️</span>
                    <span class="demo-value">Palm Islands</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🎿</span>
                    <span class="demo-value">Indoor Ski Slopes</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏜️</span>
                    <span class="demo-value">Desert City</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Skyline</span>
                <h3 class="section-title-panel">Science Fiction Made Real</h3>
                <p>Dubai shouldn't exist, and yet it does. A forest of impossible towers rising from the desert. Indoor ski slopes and artificial islands. The tallest building on Earth watching over it all.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/dubai/img_20131030_095457" class="story-image" data-caption="Dubai's skyline - science fiction made real." alt="Dubai skyline">
                <p class="photo-caption-inline">From the taxi window, the skyline looks like a science fiction movie set.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/dubai/img_20131030_095925" class="story-image" data-caption="Towers reaching for impossible heights." alt="Dubai towers">
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Excess</span>
                <h3 class="section-title-panel">Monuments to Consumption</h3>
                <p>The malls are monuments to consumption - where else would you find a classic Mercedes Gullwing displayed next to Chopard? It's a monument to what happens when money and ambition have no restraints.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/dubai/img_20131030_100337" class="story-image" data-caption="The Dubai Mall - retail as spectacle." alt="Dubai mall">
                <p class="photo-caption-inline">Even the malls feel like theme parks designed by billionaires.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/dubai/img_20131030_102159" class="story-image" data-caption="Luxury on display in Dubai." alt="Dubai luxury">
            </div>

            ${generateGallery('dubai')}
        `,
        fullDesc: "Dubai shouldn't exist, and yet it does. A forest of impossible towers rising from the desert. Indoor ski slopes, artificial islands, the tallest building on Earth. A monument to limitless ambition.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/dubai/img_20131030_095457"
    },
    {
        id: 113,
        title: "Doha, Qatar",
        coords: [25.29, 51.53],
        tag: "Pearl of the Gulf",
        icon: "💎",
        isDoor: false,
        tag: "🎵 Original Song",
        useRichContent: true,
        richContent: `
        <div class="song-panel">
            <div class="song-status">
                <span class="status-label">Original Song</span>
                <span class="status-text">Coming Soon</span>
            </div>

            <div class="story-section-panel">
                <h3>Reserved for Music</h3>
                <p>This location has been set aside for an original song. The music is being written as a tribute to this place and the memories it holds.</p>
                <p><strong>Mood:</strong> Modern / Surreal</p>
                <p><strong>Theme:</strong> Desert meets future, wealth and sand, mirages</p>
            </div>

            <div class="lyrics-section" onclick="this.classList.toggle('expanded')">
                <div class="lyrics-header">
                    <span class="lyrics-title">
                        <span class="lyrics-icon">📝</span>
                        <span>Lyrics</span>
                    </span>
                    <span class="lyrics-toggle">▼</span>
                </div>
                <div class="lyrics-content">
                    <div class="lyrics-text">
<span class="verse-label">Coming Soon</span>

Lyrics will appear here when the song is complete.

This space is reserved for "Doha, Qatar" -
an original composition inspired by this place.
                    </div>
                </div>
            </div>

            <div class="audio-player-container">
                <p style="text-align: center; font-size: 0.85rem; color: rgba(245,240,232,0.6); margin: 0;">
                    🎵 Audio player will appear when song is released
                </p>
            </div>
        </div>`,
        fullDesc: "Doha rose from the desert like a mirage made real.\n\nThe skyline is a showcase of architectural ambition-towers twisting and curving in impossible shapes. But walk through Souq Waqif and you're back in old Arabia, haggling over spices and textiles. The Museum of Islamic Art alone is worth the visit.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/Doha_uhyiqk"
    },
    {
        id: 62,
        title: "Red Sea Transit",
        coords: [12.60, 43.30],
        tag: "Armed Escort",
        icon: "⚓",
        isDoor: false,
        tag: "🎵 Original Song",
        useRichContent: true,
        richContent: `
        <div class="song-panel">
            <div class="song-status">
                <span class="status-label">Original Song</span>
                <span class="status-text">Coming Soon</span>
            </div>

            <div class="story-section-panel">
                <h3>Reserved for Music</h3>
                <p>This location has been set aside for an original song. The music is being written as a tribute to this place and the memories it holds.</p>
                <p><strong>Mood:</strong> Meditative / Journey</p>
                <p><strong>Theme:</strong> Ancient waters, passage between worlds</p>
            </div>

            <div class="lyrics-section" onclick="this.classList.toggle('expanded')">
                <div class="lyrics-header">
                    <span class="lyrics-title">
                        <span class="lyrics-icon">📝</span>
                        <span>Lyrics</span>
                    </span>
                    <span class="lyrics-toggle">▼</span>
                </div>
                <div class="lyrics-content">
                    <div class="lyrics-text">
<span class="verse-label">Coming Soon</span>

Lyrics will appear here when the song is complete.

This space is reserved for "Red Sea Transit" -
an original composition inspired by this place.
                    </div>
                </div>
            </div>

            <div class="audio-player-container">
                <p style="text-align: center; font-size: 0.85rem; color: rgba(245,240,232,0.6); margin: 0;">
                    🎵 Audio player will appear when song is released
                </p>
            </div>
        </div>`,
        fullDesc: "This is where the tension began.\n\nShips don't just cruise through the Gulf of Aden and Red Sea casually. The threat of Somali piracy meant armed escorts, convoy formations, and a few days of heightened alertness. Fire hoses at the ready, extra watches posted, and the surreal sight of naval vessels flanking a cruise ship full of passengers sipping cocktails.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769523558/IMG_0743_gxmqox.jpg"
    },
    {
        id: 118,
        title: "Suez Canal, Egypt",
        coords: [30.45, 32.35],
        tag: "The Shortcut",
        icon: "🚢",
        isDoor: false,
        tag: "🎵 Original Song",
        useRichContent: true,
        richContent: `
        <div class="song-panel">
            <div class="song-status">
                <span class="status-label">Original Song</span>
                <span class="status-text">Coming Soon</span>
            </div>

            <div class="story-section-panel">
                <h3>Reserved for Music</h3>
                <p>This location has been set aside for an original song. The music is being written as a tribute to this place and the memories it holds.</p>
                <p><strong>Mood:</strong> Epic / Historic</p>
                <p><strong>Theme:</strong> Connecting seas, human ambition, desert corridor</p>
            </div>

            <div class="lyrics-section" onclick="this.classList.toggle('expanded')">
                <div class="lyrics-header">
                    <span class="lyrics-title">
                        <span class="lyrics-icon">📝</span>
                        <span>Lyrics</span>
                    </span>
                    <span class="lyrics-toggle">▼</span>
                </div>
                <div class="lyrics-content">
                    <div class="lyrics-text">
<span class="verse-label">Coming Soon</span>

Lyrics will appear here when the song is complete.

This space is reserved for "Suez Canal, Egypt" -
an original composition inspired by this place.
                    </div>
                </div>
            </div>

            <div class="audio-player-container">
                <p style="text-align: center; font-size: 0.85rem; color: rgba(245,240,232,0.6); margin: 0;">
                    🎵 Audio player will appear when song is released
                </p>
            </div>
        </div>`,
        fullDesc: "The Suez Canal is 120 miles of engineering audacity.\n\nBefore it opened in 1869, ships had to sail around Africa. Now the desert slides past on both sides as you transit between the Mediterranean and the Red Sea. Camels watch from the banks. It's surreal.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769523799/IMG_0722_wk3dxn.jpg"
    },
    {
        id: 112,
        title: "Sharm El Sheikh, Egypt",
        coords: [27.92, 34.33],
        tag: "Red Sea Riviera",
        icon: "🤿",
        isDoor: false,
        tag: "🎵 Original Song",
        useRichContent: true,
        richContent: `
        <div class="song-panel">
            <div class="song-status">
                <span class="status-label">Original Song</span>
                <span class="status-text">Coming Soon</span>
            </div>

            <div class="story-section-panel">
                <h3>Reserved for Music</h3>
                <p>This location has been set aside for an original song. The music is being written as a tribute to this place and the memories it holds.</p>
                <p><strong>Mood:</strong> Underwater / Mysterious</p>
                <p><strong>Theme:</strong> Red Sea coral, diving into blue, desert coast</p>
            </div>

            <div class="lyrics-section" onclick="this.classList.toggle('expanded')">
                <div class="lyrics-header">
                    <span class="lyrics-title">
                        <span class="lyrics-icon">📝</span>
                        <span>Lyrics</span>
                    </span>
                    <span class="lyrics-toggle">▼</span>
                </div>
                <div class="lyrics-content">
                    <div class="lyrics-text">
<span class="verse-label">Coming Soon</span>

Lyrics will appear here when the song is complete.

This space is reserved for "Sharm El Sheikh, Egypt" -
an original composition inspired by this place.
                    </div>
                </div>
            </div>

            <div class="audio-player-container">
                <p style="text-align: center; font-size: 0.85rem; color: rgba(245,240,232,0.6); margin: 0;">
                    🎵 Audio player will appear when song is released
                </p>
            </div>
        </div>`,
        fullDesc: "Sharm El Sheikh sits at the southern tip of the Sinai Peninsula where the Gulf of Aqaba meets the Gulf of Suez.\n\nThe coral reefs here are legendary-Ras Mohammed National Park is considered one of the top dive sites in the world. Crystal clear water, walls of colorful fish, and dramatic drop-offs into the deep blue.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769523893/IMG_0292_jmjzfl.jpg"
    },
    {
        id: 63,
        title: "Istanbul, Turkey",
        coords: [41.01, 28.98],
        tag: "Where Continents Meet",
        icon: "🕌",
        isDoor: false,
        shortDesc: "Two continents, one magnificent city.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">🌍</span>
                    <span class="demo-value">Two Continents</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏛️</span>
                    <span class="demo-value">Byzantine & Ottoman</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🕌</span>
                    <span class="demo-value">3,000+ Mosques</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">👥</span>
                    <span class="demo-value">~15 Million</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Crossing</span>
                <h3 class="section-title-panel">The Bosphorus</h3>
                <p>Istanbul is the only city on Earth that spans two continents. The Bosphorus strait churns between Europe and Asia, filled with tankers, ferries, and fishing boats.</p>
                <p>Sailing through on a cruise ship is something special. The mosques and minarets of Sultanahmet on one side, the modern towers of the Asian shore on the other.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/istanbul/vnej55ugldrfwracvzx9.jpg" class="story-image" data-caption="Ferries crossing the Bosphorus - the waterway between continents." alt="Bosphorus ferry traffic">
                <p class="photo-caption-inline">Ferries crisscrossing the Bosphorus. This has been a crossroads of civilizations for millennia.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Fortress</span>
                <h3 class="section-title-panel">Rumeli Hisarı</h3>
                <p>Before Mehmed II could conquer Constantinople, he had to control the Bosphorus. In 1452, he built Rumeli Fortress at the strait's narrowest point in just four months.</p>
                <p>From the ship, the massive walls still dominate the hillside. A reminder that empires were won and lost along these shores.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/istanbul/aq0wvlrvxxxsdacnhk2z.jpg" class="story-image" data-caption="Rumeli Fortress - built in four months to control the strait." alt="Rumeli Fortress">
                <p class="photo-caption-inline">Rumeli Fortress. Built to strangle Constantinople. It worked.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/istanbul/zqnboqzhapitzuotpqpo.jpg" class="story-image" data-caption="The fortress towers still guard the narrowest point of the strait." alt="Rumeli Fortress with boat">
                <p class="photo-caption-inline">The towers still stand guard over the Bosphorus.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Waterfront</span>
                <h3 class="section-title-panel">Life on the Strait</h3>
                <p>The Bosphorus isn't just a waterway - it's the city's heart. Colorful houses cascade down the hillsides. Fish restaurants line the shores. Life revolves around the water.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/istanbul/tu96jp4v9f92xavpkvj1.jpg" class="story-image" data-caption="Hillside houses along the Bosphorus waterfront." alt="Istanbul waterfront">
                <p class="photo-caption-inline">Colorful houses tumbling down to the water. Everyone wants a view of the strait.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Modern Istanbul</span>
                <h3 class="section-title-panel">Taksim Square</h3>
                <p>Away from the historic mosques and palaces, modern Istanbul pulses with energy. Taksim Square is the heart of it - protests, celebrations, daily life all converging.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/istanbul/bwbepgnsrznraz5tghiq.jpg" class="story-image" data-caption="The Republic Monument - commemorating Turkish independence." alt="Taksim Monument">
                <p class="photo-caption-inline">The Republic Monument. Atatürk's revolution started a new chapter for Turkey.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/istanbul/xyxeo1jq28rmivmihrzr.jpg" class="story-image" data-caption="Taksim Square - where Istanbul's past and present collide." alt="Taksim Square">
                <p class="photo-caption-inline">Taksim Square. The heart of modern Istanbul.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Skyline</span>
                <h3 class="section-title-panel">City of Domes</h3>
                <p>Wherever you look in Istanbul, minarets pierce the sky. The call to prayer echoes across the water five times a day. Some mosques are being restored, as they have been for centuries.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/istanbul/jsykrluoapxnb6354eok.jpg" class="story-image" data-caption="A mosque glimpsed through the green hillsides." alt="Istanbul mosque view">
                <p class="photo-caption-inline">A glimpse of a mosque through the hillsides. They're everywhere.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/istanbul/hqoefaykny2gyjsn96e9.jpg" class="story-image" data-caption="Ottoman architecture being preserved for future generations." alt="Mosque dome">
                <p class="photo-caption-inline">Restoration in progress. Istanbul never stops preserving its past.</p>
            </div>

            ${generateGallery('istanbul', 'Photos from Istanbul')}
        `,
        fullDesc: "Istanbul is the only city on Earth that spans two continents. The Hagia Sophia. The Blue Mosque. The Spice Market's mountains of saffron and sumac. This city has been the center of empires for two thousand years.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1771203420/shiplife/istanbul/vnej55ugldrfwracvzx9.jpg"
    },
    {
        id: 64,
        title: "Panama Canal",
        coords: [9.08, -79.68],
        tag: "The Big Ditch",
        icon: "🚢",
        isDoor: false,
        tag: "🎵 Original Song",
        useRichContent: true,
        richContent: `
        <div class="song-panel">
            <div class="song-status">
                <span class="status-label">Original Song</span>
                <span class="status-text">Coming Soon</span>
            </div>

            <div class="story-section-panel">
                <h3>Reserved for Music</h3>
                <p>This location has been set aside for an original song. The music is being written as a tribute to this place and the memories it holds.</p>
                <p><strong>Mood:</strong> Engineering Marvel / Transit</p>
                <p><strong>Theme:</strong> Between two oceans, locks and lifting, human achievement</p>
            </div>

            <div class="lyrics-section" onclick="this.classList.toggle('expanded')">
                <div class="lyrics-header">
                    <span class="lyrics-title">
                        <span class="lyrics-icon">📝</span>
                        <span>Lyrics</span>
                    </span>
                    <span class="lyrics-toggle">▼</span>
                </div>
                <div class="lyrics-content">
                    <div class="lyrics-text">
<span class="verse-label">Coming Soon</span>

Lyrics will appear here when the song is complete.

This space is reserved for "Panama Canal" -
an original composition inspired by this place.
                    </div>
                </div>
            </div>

            <div class="audio-player-container">
                <p style="text-align: center; font-size: 0.85rem; color: rgba(245,240,232,0.6); margin: 0;">
                    🎵 Audio player will appear when song is released
                </p>
            </div>
        </div>`,
        fullDesc: "The Panama Canal is one of humanity's greatest engineering achievements.\n\nTransiting through the locks, rising and falling between oceans, you feel the scale of what they built here. Ships from every nation queue to pass through. The jungle presses in from both sides. Connecting two oceans changed the world.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769803417/20200311_100948_aus73q.jpg"
    },
    {
        id: 117,
        title: "San Juan, Puerto Rico",
        coords: [18.47, -66.12],
        tag: "Caribbean Colors",
        icon: "🏰",
        isDoor: false,
        tag: "🎵 Original Song",
        useRichContent: true,
        richContent: `
        <div class="song-panel">
            <div class="song-status">
                <span class="status-label">Original Song</span>
                <span class="status-text">Coming Soon</span>
            </div>

            <div class="story-section-panel">
                <h3>Reserved for Music</h3>
                <p>This location has been set aside for an original song. The music is being written as a tribute to this place and the memories it holds.</p>
                <p><strong>Mood:</strong> Warm / Nostalgic</p>
                <p><strong>Theme:</strong> Old San Juan, Spanish forts, Caribbean soul</p>
            </div>

            <div class="lyrics-section" onclick="this.classList.toggle('expanded')">
                <div class="lyrics-header">
                    <span class="lyrics-title">
                        <span class="lyrics-icon">📝</span>
                        <span>Lyrics</span>
                    </span>
                    <span class="lyrics-toggle">▼</span>
                </div>
                <div class="lyrics-content">
                    <div class="lyrics-text">
<span class="verse-label">Coming Soon</span>

Lyrics will appear here when the song is complete.

This space is reserved for "San Juan, Puerto Rico" -
an original composition inspired by this place.
                    </div>
                </div>
            </div>

            <div class="audio-player-container">
                <p style="text-align: center; font-size: 0.85rem; color: rgba(245,240,232,0.6); margin: 0;">
                    🎵 Audio player will appear when song is released
                </p>
            </div>
        </div>`,
        fullDesc: "Old San Juan is a living postcard.\n\nCobblestone streets wind between pastel buildings. El Morro fortress guards the harbor as it has for 500 years. The rum flows freely, the music spills out of every doorway, and the mix of Spanish, African, and Taíno cultures creates something uniquely Puerto Rican.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769808723/20200124_110715_x1nxye.jpg"
    },
    {
        id: 65,
        title: "Yalta, Ukraine",
        coords: [44.50, 34.17],
        tag: "Crimean Jewel",
        icon: "🏰",
        isDoor: false,
        shortDesc: "Where history was made on the Black Sea.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">📜</span>
                    <span class="demo-value">1945 Conference</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏰</span>
                    <span class="demo-value">Swallow's Nest</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">👑</span>
                    <span class="demo-value">Russian Riviera</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">✍️</span>
                    <span class="demo-value">Chekhov's Home</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The History</span>
                <h3 class="section-title-panel">Where the World Was Divided</h3>
                <p>Yalta is where Roosevelt, Churchill, and Stalin divided up the post-war world at the famous 1945 conference. The decisions made in that room shaped the next half century.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/yalta/img_3336" class="story-image" data-caption="Yalta - the Russian Riviera on the Black Sea." alt="Yalta waterfront">
                <p class="photo-caption-inline">The Black Sea stretches to the horizon, impossibly blue.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Palaces</span>
                <h3 class="section-title-panel">The Russian Riviera</h3>
                <p>Before the conference, this was the Russian Riviera - Tsars built palaces along this coast. The Swallow's Nest castle clings impossibly to its cliff. Chekhov spent his final years here, writing plays that would outlast empires.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/yalta/img_3338" class="story-image" data-caption="Crimean coast architecture." alt="Yalta architecture">
                <p class="photo-caption-inline">Where Tsars once summered and writers found their muse.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/yalta/img_3345" class="story-image" data-caption="The Crimean coastline." alt="Crimean coast">
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Atmosphere</span>
                <h3 class="section-title-panel">Echoes of the Soviet Past</h3>
                <p>When we visited, the Soviet past was still visible everywhere - Lenin statues, brutalist architecture, and that particular post-Soviet atmosphere that's hard to describe but unmistakable.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/yalta/img_3347" class="story-image" data-caption="Layers of history on the Black Sea coast." alt="Yalta scene">
            </div>

            ${generateGallery('yalta')}
        `,
        fullDesc: "Yalta is where Roosevelt, Churchill, and Stalin divided up the post-war world.\n\nBut before the conference, it was the Russian Riviera-Tsars built palaces along this coast. The Swallow's Nest castle clings impossibly to its cliff. The Black Sea stretches to the horizon.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/yalta/img_3336"
    },
    {
        id: 66,
        title: "Muscat, Oman",
        coords: [23.59, 58.54],
        tag: "Arabia's Hidden Gem",
        icon: "🕌",
        isDoor: false,
        tag: "🎵 Original Song",
        useRichContent: true,
        richContent: `
        <div class="song-panel">
            <div class="song-status">
                <span class="status-label">Original Song</span>
                <span class="status-text">Coming Soon</span>
            </div>

            <div class="story-section-panel">
                <h3>Reserved for Music</h3>
                <p>This location has been set aside for an original song. The music is being written as a tribute to this place and the memories it holds.</p>
                <p><strong>Mood:</strong> Ancient / Dignified</p>
                <p><strong>Theme:</strong> Frankincense, white city, Gulf traditions</p>
            </div>

            <div class="lyrics-section" onclick="this.classList.toggle('expanded')">
                <div class="lyrics-header">
                    <span class="lyrics-title">
                        <span class="lyrics-icon">📝</span>
                        <span>Lyrics</span>
                    </span>
                    <span class="lyrics-toggle">▼</span>
                </div>
                <div class="lyrics-content">
                    <div class="lyrics-text">
<span class="verse-label">Coming Soon</span>

Lyrics will appear here when the song is complete.

This space is reserved for "Muscat, Oman" -
an original composition inspired by this place.
                    </div>
                </div>
            </div>

            <div class="audio-player-container">
                <p style="text-align: center; font-size: 0.85rem; color: rgba(245,240,232,0.6); margin: 0;">
                    🎵 Audio player will appear when song is released
                </p>
            </div>
        </div>

        ${generateGallery('muscat', 'Photos from Muscat')}`,
        fullDesc: "Muscat is what you hope the Middle East will be.\n\nThe Sultan Qaboos Grand Mosque is breathtaking. The old souks smell of frankincense. The mountains plunge to the sea. Oman has oil wealth but wears it lightly-this is Arabia without the excess.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/muscat/muscat-fortress-portrait"
    },
    {
        id: 67,
        title: "Nessebar, Bulgaria",
        coords: [42.66, 27.73],
        tag: "The Black Sea Pearl",
        icon: "🏛️",
        isDoor: false,
        shortDesc: "Ancient city on a tiny peninsula.",
        useRichContent: true,
        richContent: `
            <div class="story-section-panel">
                <p>Nessebar packs 3,000 years of history onto a peninsula barely larger than a football field.</p>
                <p>Greek ruins, Byzantine churches, Ottoman houses - all crammed together on streets barely wide enough to walk. The Black Sea surrounds it on three sides. UNESCO calls it one of Europe's richest towns for historic buildings per square meter.</p>
                <p>We walked the narrow cobblestone streets, ducking into ancient churches with fading frescoes, watching fishermen mend nets by the old harbor. Tourist shops have taken over some of the old houses, but step off the main drag and you find quiet corners where the centuries pile up around you.</p>
            </div>
            ${generateGallery('nessebar')}
        `,
        fullDesc: "Nessebar packs 3,000 years of history onto a peninsula barely larger than a football field.\n\nGreek ruins, Byzantine churches, Ottoman houses-all crammed together on streets barely wide enough to walk. The Black Sea surrounds it on three sides. UNESCO calls it one of Europe's richest towns for historic buildings.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769524929/IMG_3277_jn2dkg.jpg"
    },
    {
        id: 68,
        title: "Venice, Italy",
        coords: [45.44, 12.32],
        tag: "La Serenissima",
        icon: "🎭",
        isDoor: false,
        shortDesc: "The impossible city built on water.",
        useRichContent: true,
        richContent: `
            <div class="story-section-panel">
                <h3>The Impossible City</h3>
                <p>Venice shouldn't exist, but it does - and has for over a thousand years. A city built on wooden pilings driven into a lagoon, a republic that once rivaled Rome, a dream made of stone and water that refuses to wake.</p>
                <img class="story-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/venice/memsil77lclgh3on0xqv.jpg" alt="St. Mark's" data-caption="The Campanile and Doge's Palace from the lagoon - the view that launched a thousand paintings.">
                <p>No cars, no roads - just canals, bridges, and the most beautiful decay you'll ever see. The Piazza San Marco floods with acqua alta and tourists alike. Gondoliers navigate waters their families have worked for generations. Every corner reveals another impossible view.</p>
            </div>

            <div class="story-section-panel">
                <h3>Arrival by Water</h3>
                <p>Venice is one of the few ports where cruise ships are controversial - the giants of the industry were eventually banned from the main canal, their wakes damaging the fragile foundations. But our ship, the Seabourn Odyssey, was small enough to slip through.</p>
                <img class="story-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/venice/subvvj68x70jjlrmetwd.jpg" alt="Seabourn name" data-caption="Seabourn Odyssey - 32,000 tons of floating luxury, but small enough to reach Venice.">
                <p>From the cruise terminal, we'd take a water taxi into the city - the only way to arrive. Watching Venice materialize from the lagoon is like watching a mirage become real. Churches rising directly from the water. Palazzos with their foundations slowly surrendering to the sea.</p>
                <img class="story-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/venice/pcrxgne7lfvltufyldao.jpg" alt="Water taxi" data-caption="Water taxi approaching the ship - our floating home in Venice.">
            </div>

            <div class="story-section-panel">
                <h3>The Grand Canal</h3>
                <p>The Grand Canal is Venice's main street - a serpentine waterway lined with 500 years of architectural ambition. Every palazzo tells a story of merchant princes and fallen fortunes.</p>
                <img class="story-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/venice/dd0ujjlypmrzkcsjfysv.jpg" alt="Grand Canal" data-caption="Palazzos and churches slide past the water taxi window.">
                <p>The water taxis weave between vaporetti and gondolas, a ballet of boats that has replaced the traffic of other cities. The driver stands at the helm like a charioteer, knowing every current and crossing.</p>
                <img class="story-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/venice/kososcn3vkjncknnp2xl.jpg" alt="Molino Stucky" data-caption="The Molino Stucky - a 19th-century flour mill now reborn as a Hilton.">
            </div>

            <div class="story-section-panel">
                <h3>Churches on Water</h3>
                <p>Venice has over 100 churches, and it seems like half of them are visible from any point on the water. They rise from the canals as if they grew there, their foundations invisible beneath the surface.</p>
                <img class="story-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/venice/fbbnjwmpcti64jsveq24.jpg" alt="Gesuati" data-caption="Chiesa dei Gesuati on Zattere - Tiepolo frescoes hide behind this facade.">
                <img class="story-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/venice/cvpd1i1wb2b8ysqvpl6h.jpg" alt="Redentore" data-caption="Chiesa del Redentore - Palladio built it to celebrate the end of the plague.">
                <p>Santa Maria della Salute guards the entrance to the Grand Canal - a baroque masterpiece built as a votive offering after the plague of 1631. Every Venetian knows someone who climbed those steps to light a candle.</p>
                <img class="story-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/venice/yzwkbp6jfbopfwa1cqxg.jpg" alt="Salute" data-caption="Santa Maria della Salute - the baroque sentinel at the mouth of the Grand Canal.">
            </div>

            <div class="story-section-panel">
                <h3>Coming Home</h3>
                <p>At the end of the day, the water taxi would return us to the ship - our own floating piece of Venice. The Odyssey waited at her berth, a familiar silhouette against the lagoon sunset.</p>
                <img class="story-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/venice/ubmxlfji9t6ltpugk41h.jpg" alt="Ship at dock" data-caption="The Seabourn Odyssey at her Venice berth - one of cruising's most coveted ports.">
                <p>Venice is sinking, they say - a few millimeters every year. The acqua alta comes more often. But for now, it endures. La Serenissima, the Most Serene Republic, still rises from the water like a dream.</p>
            </div>

            ${generateGallery('venice', 'More from Venice')}
        `,
        fullDesc: "Venice shouldn't exist, but it does-and has for over a thousand years.\n\nNo cars, no roads-just canals, bridges, and the most beautiful decay you'll ever see. The Piazza San Marco floods with acqua alta and tourists alike. Gondoliers navigate waters their families have worked for generations. Every corner reveals another impossible view.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769525228/IMG_2302_t26i3t.jpg"
    },
        {
        id: 71,
        title: "Broome, Australia",
        coords: [-17.96, 122.24],
        tag: "Pearl of the Kimberley",
        icon: "🐪",
        isDoor: false,
        useRichContent: true,
        shortDesc: "Where the outback meets the ocean.",
        fullDesc: "Broome was built on pearls and still has that frontier feel. Cable Beach stretches for 22 kilometers of white sand. Camels walk the shoreline at sunset—a tradition from the Afghan cameleers who helped build the outback.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769801858/IMG_0196_dueq5z.jpg",
        richContent: `
            <div class="story-section-panel">
                <span class="section-tag-panel">The Beach</span>
                <h3 class="section-title-panel">Where Outback Meets Ocean</h3>
                <p>Cable Beach runs for 22 kilometers. That's not a typo. Twenty-two kilometers of white sand meeting turquoise water, backed by red pindan cliffs.</p>
                <p>At sunset, camel trains walk the shoreline—a tradition dating back to the Afghan cameleers who helped open up the outback. It sounds like a tourist attraction. It is. But it's also genuinely beautiful.</p>
                <p>The colors here are impossible: red, white, turquoise, and gold, all at once.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Phenomenon</span>
                <h3 class="section-title-panel">Staircase to the Moon</h3>
                <p>A few nights each month, when the full moon rises over Roebuck Bay at low tide, something magical happens.</p>
                <p>Moonlight reflects off the exposed mudflats, creating the illusion of a golden staircase stretching from the shore to the moon itself.</p>
                <p>Locals gather at Town Beach with picnic blankets and drinks. It's part astronomical event, part community ritual. Broome knows how to appreciate where it is.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about this location</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🐪</span>
                        <span>Kimberley Facts</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Pearl Capital:</strong> Broome once supplied 80% of the world's mother-of-pearl. The industry still exists.</li>
                        <li><strong>Japanese Cemetery:</strong> Hundreds of Japanese pearl divers are buried here—testament to the industry's dangers.</li>
                        <li><strong>Dinosaur Footprints:</strong> The coastline has the world's most diverse dinosaur tracks, 130 million years old.</li>
                        <li><strong>Wet/Dry:</strong> Two seasons—wet (monsoon) and dry. The dry season (May-October) is when to visit.</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        id: 72,
        title: "Izmir, Turkey",
        coords: [38.42, 27.14],
        tag: "Pearl of the Aegean",
        icon: "🏛️",
        isDoor: false,
        tag: "🎵 Original Song",
        useRichContent: true,
        richContent: `
        <div class="song-panel">
            <div class="song-status">
                <span class="status-label">Original Song</span>
                <span class="status-text">Coming Soon</span>
            </div>

            <div class="story-section-panel">
                <h3>Reserved for Music</h3>
                <p>This location has been set aside for an original song. The music is being written as a tribute to this place and the memories it holds.</p>
                <p><strong>Mood:</strong> Wistful / Mediterranean</p>
                <p><strong>Theme:</strong> Aegean afternoons, Turkish coffee, waterfront</p>
            </div>

            <div class="lyrics-section" onclick="this.classList.toggle('expanded')">
                <div class="lyrics-header">
                    <span class="lyrics-title">
                        <span class="lyrics-icon">📝</span>
                        <span>Lyrics</span>
                    </span>
                    <span class="lyrics-toggle">▼</span>
                </div>
                <div class="lyrics-content">
                    <div class="lyrics-text">
<span class="verse-label">Coming Soon</span>

Lyrics will appear here when the song is complete.

This space is reserved for "Izmir, Turkey" -
an original composition inspired by this place.
                    </div>
                </div>
            </div>

            <div class="audio-player-container">
                <p style="text-align: center; font-size: 0.85rem; color: rgba(245,240,232,0.6); margin: 0;">
                    🎵 Audio player will appear when song is released
                </p>
            </div>
        </div>`,
        fullDesc: "Izmir has been a port city for three thousand years.\n\nThe ancient agora still stands in the city center. The waterfront promenade stretches for miles. The bazaar is less touristy than Istanbul's but just as atmospheric. This is Turkey's most progressive city, looking west across the Aegean toward Greece.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769811340/Izmir_w6cmza.jpg"
    },
    {
        id: 73,
        title: "Haifa, Israel",
        coords: [32.79, 34.99],
        tag: "City on the Mountain",
        icon: "🌺",
        isDoor: false,
        tag: "🎵 Original Song",
        useRichContent: true,
        richContent: `
        <div class="song-panel">
            <div class="song-status">
                <span class="status-label">Original Song</span>
                <span class="status-text">Coming Soon</span>
            </div>

            <div class="story-section-panel">
                <h3>Reserved for Music</h3>
                <p>This location has been set aside for an original song. The music is being written as a tribute to this place and the memories it holds.</p>
                <p><strong>Mood:</strong> Terraced / Spiritual</p>
                <p><strong>Theme:</strong> Bahá'í Gardens, mountain to sea, coexistence</p>
            </div>

            <div class="lyrics-section" onclick="this.classList.toggle('expanded')">
                <div class="lyrics-header">
                    <span class="lyrics-title">
                        <span class="lyrics-icon">📝</span>
                        <span>Lyrics</span>
                    </span>
                    <span class="lyrics-toggle">▼</span>
                </div>
                <div class="lyrics-content">
                    <div class="lyrics-text">
<span class="verse-label">Coming Soon</span>

Lyrics will appear here when the song is complete.

This space is reserved for "Haifa, Israel" -
an original composition inspired by this place.
                    </div>
                </div>
            </div>

            <div class="audio-player-container">
                <p style="text-align: center; font-size: 0.85rem; color: rgba(245,240,232,0.6); margin: 0;">
                    🎵 Audio player will appear when song is released
                </p>
            </div>
        </div>`,
        fullDesc: "Haifa climbs Mount Carmel in terraces.\n\nThe Bahá'í Gardens are the showstopper-nineteen terraces of immaculate gardens cascading down the mountainside to the Mediterranean. Arabs and Jews live here in relative harmony. The German Colony serves excellent hummus. It's Israel's most liveable city.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769802091/IMG_20131015_121917_ebzafd.jpg"
    },
    {
        id: 74,
        title: "Parga, Greece",
        coords: [39.28, 20.40],
        tag: "Hidden Riviera",
        icon: "🏰",
        isDoor: false,
        shortDesc: "A colorful village on the Ionian coast.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">🏰</span>
                    <span class="demo-value">Venetian Fortress</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏖️</span>
                    <span class="demo-value">Ionian Coast</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">📅</span>
                    <span class="demo-value">11th Century</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🇬🇷</span>
                    <span class="demo-value">Epirus Region</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Arriving</span>
                <h3 class="section-title-panel">The Hidden Riviera</h3>
                <p>Parga tumbles down to its harbor in a cascade of pastel houses - pink, yellow, orange, ochre. Tour groups head to Corfu; those who know come here instead.</p>
                <figure class="inline-image">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/parga/parga-scene-01" alt="Parga from the sea" onclick="openLightbox(this.src.replace('w_800', 'w_1600'))" style="cursor:pointer">
                    <figcaption>Approaching Parga from the sea - the pastel village rises from the harbor.</figcaption>
                </figure>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Town</span>
                <h3 class="section-title-panel">Through the Streets</h3>
                <p>Stepping off the tender, I wandered into the maze of narrow streets. Every corner revealed another postcard view.</p>
                <figure class="inline-image">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/parga/parga-scene-06" alt="Parga street" onclick="openLightbox(this.src.replace('w_800', 'w_1600'))" style="cursor:pointer">
                    <figcaption>Narrow streets draped in bougainvillea - the heart of old Parga.</figcaption>
                </figure>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Climb</span>
                <h3 class="section-title-panel">Up to the Fortress</h3>
                <p>The path to the Kastro winds upward through the town, each turn revealing better views of the harbor below.</p>
                <figure class="inline-image">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/parga/parga-scene-07" alt="Harbor overlook" onclick="openLightbox(this.src.replace('w_800', 'w_1600'))" style="cursor:pointer">
                    <figcaption>Looking back at the harbor - palm trees frame the view as the path climbs higher.</figcaption>
                </figure>
                <figure class="inline-image">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/parga/parga-scene-03" alt="Fortress headland" onclick="openLightbox(this.src.replace('w_800', 'w_1600'))" style="cursor:pointer">
                    <figcaption>The fortress headland comes into view - Venetian walls perched above the sea.</figcaption>
                </figure>
                <figure class="inline-image">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/parga/parga-scene-11" alt="Fortress from below" onclick="openLightbox(this.src.replace('w_800', 'w_1600'))" style="cursor:pointer">
                    <figcaption>The Kastro looms above - almost there now.</figcaption>
                </figure>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Entering the Kastro</span>
                <h3 class="section-title-panel">At Your Own Risk</h3>
                <figure class="inline-image">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/parga/parga-scene-19" alt="Kastro entrance sign" onclick="openLightbox(this.src.replace('w_800', 'w_1600'))" style="cursor:pointer">
                    <figcaption>"Visitors may visit the Citadel at their own liability" - fair warning.</figcaption>
                </figure>
                <p>The sign says it all. This isn't a manicured tourist attraction - it's a fortress slowly being reclaimed by nature.</p>
                <figure class="inline-image">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/parga/parga-scene-14" alt="Fortress gate" onclick="openLightbox(this.src.replace('w_800', 'w_1600'))" style="cursor:pointer">
                    <figcaption>Through the iron gate - a stone tunnel leads into the fortress.</figcaption>
                </figure>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Inside the Walls</span>
                <h3 class="section-title-panel">Exploring the Ruins</h3>
                <figure class="inline-image">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/parga/parga-scene-17" alt="Cobblestone path" onclick="openLightbox(this.src.replace('w_800', 'w_1600'))" style="cursor:pointer">
                    <figcaption>Ancient cobblestones lead deeper into the fortress.</figcaption>
                </figure>
                <figure class="inline-image">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/parga/parga-scene-21" alt="Stone tunnel" onclick="openLightbox(this.src.replace('w_800', 'w_1600'))" style="cursor:pointer">
                    <figcaption>Stone tunnels wind through the old fortifications.</figcaption>
                </figure>
                <figure class="inline-image">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/parga/parga-fortress-entrance" alt="Overgrown entrance" onclick="openLightbox(this.src.replace('w_800', 'w_1600'))" style="cursor:pointer">
                    <figcaption>Nature slowly reclaims the old walls - ferns and vines fill the archways.</figcaption>
                </figure>
                <figure class="inline-image">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/parga/parga-fortress-cannon" alt="Cannon courtyard" onclick="openLightbox(this.src.replace('w_800', 'w_1600'))" style="cursor:pointer">
                    <figcaption>The fortress courtyard - cannons still point out to sea.</figcaption>
                </figure>
                <figure class="inline-image">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/parga/parga-scene-13" alt="Cannon through opening" onclick="openLightbox(this.src.replace('w_800', 'w_1600'))" style="cursor:pointer">
                    <figcaption>A cannon peers through a fortress opening - still guarding the harbor after centuries.</figcaption>
                </figure>
            </div>

            <div class="more-info-toggle collapsed" onclick="this.classList.toggle('collapsed')">
                <span class="toggle-icon">▼</span>
                <span class="toggle-text">The Fortress: A History of Defiance</span>
            </div>
            <div class="more-info-content">
                <p><strong>Norman Origins (11th Century):</strong> The fortress was first built by the Normans around 1100 AD, part of their expansion into Byzantine territories. Its position - a rocky promontory with sheer cliffs on three sides - made it nearly impregnable.</p>

                <p><strong>Venetian Era (1401-1797):</strong> Venice took control in 1401 and transformed the fortress into a major stronghold. For nearly 400 years, Parga was a Venetian outpost on the edge of Ottoman territory - a Christian bastion surrounded by the Sultan's lands. The Venetians expanded the walls, added bastions, and made it one of the most formidable fortresses on the Ionian coast.</p>

                <p><strong>The Great Betrayal (1819):</strong> When Venice fell to Napoleon in 1797, Parga passed through French and then British hands. In 1819, Britain made a decision that would haunt the town forever: they sold Parga to Ali Pasha of Ioannina, the Ottoman ruler of Epirus.</p>

                <p>The people of Parga refused to live under Ottoman rule. In one of the most dramatic moments in Greek history, the entire population - around 4,000 people - chose exodus over submission. Before leaving, they exhumed the bones of their ancestors from the cemeteries, burned them in the main square, and carried the ashes with them to Corfu. They would not leave their dead to be desecrated.</p>

                <figure class="inline-image">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/parga/parga-pano-fortress" alt="Fortress panorama" onclick="openLightbox(this.src.replace('w_800', 'w_1600'))" style="cursor:pointer">
                    <figcaption>Inside the fortress walls - these stones witnessed the exodus of 1819.</figcaption>
                </figure>

                <p><strong>Return to Greece (1913):</strong> Parga was finally united with Greece after the Balkan Wars. Today, the fortress stands as a monument to the town's fierce independence - overgrown but unbowed, its walls still watching over the harbor below.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Views</span>
                <h3 class="section-title-panel">From the Heights</h3>
                <p>The climb is worth it. From the top of the fortress, the entire bay unfolds below.</p>
                <figure class="inline-image">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/parga/parga-scene-34" alt="Panoramic bay" onclick="openLightbox(this.src.replace('w_800', 'w_1600'))" style="cursor:pointer">
                    <figcaption>Where the mountains meet the sea - the Ionian stretches to the horizon.</figcaption>
                </figure>
                <figure class="inline-image">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/parga/parga-scene-31" alt="Town rooftops" onclick="openLightbox(this.src.replace('w_800', 'w_1600'))" style="cursor:pointer">
                    <figcaption>Looking down at the terracotta rooftops of Parga.</figcaption>
                </figure>
                <figure class="inline-image">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/parga/parga-scene-26" alt="View from fortress top" onclick="openLightbox(this.src.replace('w_800', 'w_1600'))" style="cursor:pointer">
                    <figcaption>Looking down from the fortress walls toward the beach.</figcaption>
                </figure>
                <figure class="inline-image">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/parga/parga-scene-27" alt="View toward beach" onclick="openLightbox(this.src.replace('w_800', 'w_1600'))" style="cursor:pointer">
                    <figcaption>The same view - fortress ruins framing the bay below.</figcaption>
                </figure>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Beach</span>
                <h3 class="section-title-panel">Back Down Below</h3>
                <p>After the fortress, the beach called. The waters around Parga are some of the clearest in Greece.</p>
                <figure class="inline-image">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/parga/parga-beach-umbrellas" alt="Beach umbrellas" onclick="openLightbox(this.src.replace('w_800', 'w_1600'))" style="cursor:pointer">
                    <figcaption>Colorful umbrellas line the beach - the perfect end to the day.</figcaption>
                </figure>
            </div>

            ${generateGallery('parga')}
        `,
        fullDesc: "Parga tumbles down to its harbor in a cascade of pastel houses. The Venetian castle watches from the headland. Tour groups head to Corfu; those who know come here instead.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/parga/parga-phone-01"
    },
    {
        id: 75,
        title: "Hvar, Croatia",
        coords: [43.17, 16.44],
        tag: "Croatian Glamour",
        icon: "⛵",
        isDoor: false,
        shortDesc: "Where yachts and lavender fields meet.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">⛵</span>
                    <span class="demo-value">Superyachts</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏰</span>
                    <span class="demo-value">Spanish Fortress</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🌸</span>
                    <span class="demo-value">Lavender Fields</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🦁</span>
                    <span class="demo-value">Venetian Rule</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Harbor</span>
                <h3 class="section-title-panel">Croatia's St. Tropez</h3>
                <p>Hvar has been famous since the ancient Greeks arrived. Now it's Croatia's answer to St. Tropez - superyachts in the harbor, beach clubs on the islands nearby, the beautiful and fashionable crowding the marble streets.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/hvar/img_3640" class="story-image" data-caption="Hvar's harbor - where superyachts meet ancient stone." alt="Hvar harbor">
                <p class="photo-caption-inline">The harbor where superyachts moor against ancient Venetian walls.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/hvar/img_3644" class="story-image" data-caption="The marble streets of Hvar town." alt="Hvar streets">
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Fortress</span>
                <h3 class="section-title-panel">Spanish Fortress Above Town</h3>
                <p>The Spanish Fortress looms over it all, built in the 16th century when Venice ruled these waters. Climb to the fortress above town and it's just you, the lavender-scented breeze, and views across a hundred islands.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/hvar/img_3650" class="story-image" data-caption="Views from the fortress - islands scattered across the Adriatic." alt="View from fortress">
                <p class="photo-caption-inline">From the fortress walls - islands scattered like emeralds across the Adriatic.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/hvar/img_3656" class="story-image" data-caption="The Adriatic stretches to the horizon." alt="Adriatic view">
            </div>

            ${generateGallery('hvar')}
        `,
        fullDesc: "Hvar is Croatia's answer to St. Tropez - superyachts in the harbor, the beautiful and fashionable crowding marble streets. The Spanish Fortress looms over it all, built when Venice ruled these waters.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/hvar/img_3640"
    },
    {
        id: 76,
        title: "Constanța, Romania",
        coords: [44.18, 28.63],
        tag: "Black Sea Gateway",
        icon: "⚓",
        isDoor: false,
        shortDesc: "Romania's window to the Black Sea.",
        useRichContent: true,
        richContent: `
            <div class="story-section-panel">
                <h3 class="section-title-panel">The Old Town</h3>
                <p>Constanța is Romania's largest port and oldest continuously inhabited city - founded by the Greeks as Tomis around 600 BC. The poet Ovid spent his final years in exile here.</p>
                <p>The old town has a faded grandeur to it. Pedestrian streets lined with art nouveau buildings, some beautifully restored, others waiting their turn. Shops, cafes, and not many tourists.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/constanta/img_3296" class="story-image" data-caption="Constanța's pedestrian quarter - old European charm on the Black Sea." alt="Constanta old town street">
                <p class="photo-caption-inline">Constanța's pedestrian quarter - old European charm on the Black Sea.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/constanta/img_3297" class="story-image" data-caption="Summer afternoon in the city center." alt="Fountain square in Constanta">
                <p class="photo-caption-inline">Summer afternoon in the city center.</p>
            </div>

            <div class="story-section-panel">
                <h3 class="section-title-panel">Mamaia</h3>
                <p>North of the old town stretches Mamaia - Romania's answer to the Riviera. A narrow strip of sand between the Black Sea and a lake, lined with hotels, clubs, and beach bars.</p>
                <p>In summer, this place comes alive. Romanian vacationers, prices in Lei, and a party atmosphere that felt completely different from the typical Mediterranean cruise ports.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/constanta/img_3299" class="story-image" data-caption="Beach cabanas at Mamaia - Romania's summer playground." alt="Mamaia beach resort">
                <p class="photo-caption-inline">Beach cabanas at Mamaia - Romania's summer playground.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/constanta/img_3298" class="story-image" data-caption="Mamaia nightlife - shots for 3 Lei." alt="Megalos Summer Club Mamaia">
                <p class="photo-caption-inline">Mamaia nightlife - shots for 3 Lei.</p>
            </div>
        `,
        fullDesc: "Constanța is Romania's largest port and oldest continuously inhabited city - founded by the Greeks around 600 BC. The old town has faded art nouveau charm, while nearby Mamaia offers Romania's answer to the Riviera.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/constanta/img_3296"
    },
    {
        id: 77,
        title: "Çeşme, Turkey",
        coords: [38.32, 26.31],
        tag: "Aegean Resort",
        icon: "⚓",
        isDoor: false,
        shortDesc: "Wind, waves, and Turkish hospitality.",
        useRichContent: true,
        richContent: `
            <p>Çeşme sits on a peninsula where the Aegean winds blow constant and the pace is unhurried. It's a resort town favored by Turks, not yet overrun by international tourism.</p>
            <p>The town square is lined with palm trees and cafés. Local shops sell everything from carpets to kebabs. It's the kind of place where you wander without a plan and end up having the best afternoon.</p>

            ${generateGallery('cesme')}
        `,
        fullDesc: "Çeşme sits on a peninsula where the Aegean winds blow constant and the pace is unhurried. It's a resort town favored by Turks - palm-lined squares, local cafés, and that unhurried Mediterranean rhythm.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/cesme/town_square.jpg"
    },
    {
        id: 78,
        title: "Katakolon, Greece",
        coords: [37.64, 21.32],
        tag: "Gateway to Olympia",
        icon: "🏛️",
        isDoor: false,
        shortDesc: "Where the Olympic flame begins its journey.",
        useRichContent: true,
        richContent: `
            <div class="story-section-panel">
                <h3 class="section-title-panel">Two Wheels and a Tank of Gas</h3>
                <p>Katakolon is a tiny port town on Greece's western Peloponnese coast. Most passengers pile onto buses bound for ancient Olympia - birthplace of the Olympic Games, where the flame is still lit every four years.</p>
                <p>But I'd been to Olympia before. This time I wanted to see what the buses drove past.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/katakolon/img_3597" class="story-image" data-caption="The best way to see Greece." alt="Scooter mirror selfie">
                <p class="photo-caption-inline">The best way to see Greece.</p>
                <p>A rental scooter, a vague sense of direction, and a full tank of gas. The road out of town quickly narrowed into winding lanes through olive groves and sleepy villages. No tour groups. No schedule. Just the buzz of the engine and the smell of wild herbs baking in the sun.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/katakolon/img_3600" class="story-image" data-caption="Greek countryside - ancient ruins hiding in plain sight." alt="Rural Greece with ruins">
                <p class="photo-caption-inline">Greek countryside - ancient ruins hiding in plain sight.</p>
            </div>

            <div class="story-section-panel">
                <h3 class="section-title-panel">The Hidden Cove</h3>
                <p>Following hand-painted signs down dirt roads eventually led to a small beach cove. Locals swimming, a few other scooters parked in the shade. No facilities, no entrance fee - just the Ionian Sea and an afternoon to kill.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/katakolon/img_3602" class="story-image" data-caption="Found it. A hidden cove away from the cruise crowds." alt="Beach cove with scooters">
                <p class="photo-caption-inline">Found it. A hidden cove away from the cruise crowds.</p>
                <p>These are the moments that make ship life worth it. Not the famous sites everyone photographs, but the random turns that lead somewhere unexpected.</p>
            </div>

            <div class="story-section-panel">
                <h3 class="section-title-panel">Back to Town</h3>
                <p>Made it back to Katakolon with time to spare. The waterfront was lined with tavernas - blue awnings, white tablecloths, fishing boats bobbing at the dock. Cold beer, grilled octopus, and a view of the ship waiting in the harbor.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/katakolon/img_3594" class="story-image" data-caption="Katakolon's waterfront - tavernas and blue awnings." alt="Greek waterfront promenade">
                <p class="photo-caption-inline">Katakolon's waterfront - tavernas and blue awnings.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/katakolon/img_3592" class="story-image" data-caption="Lunch with a view." alt="Waterfront cafe">
                <p class="photo-caption-inline">Lunch with a view.</p>
            </div>
        `,
        fullDesc: "Katakolon is a tiny port town on Greece's western Peloponnese coast. Most passengers pile onto buses bound for ancient Olympia. But I'd been there before. This time - a rental scooter, winding roads through olive groves, and a hidden beach cove away from the crowds.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/katakolon/img_3602"
    },
    {
        id: 79,
        title: "Odessa, Ukraine",
        coords: [46.48, 30.73],
        tag: "Pearl of the Black Sea",
        icon: "⚓",
        isDoor: false,
        shortDesc: "Opera, architecture, and the famous steps.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <span>Black Sea Coast</span>
                <span>Pop. 1 Million</span>
                <span>Founded 1794</span>
                <span>June 2013</span>
            </div>

            <h3>Nothing Else to Do But Wander</h3>
            <p>Odessa was once the Russian Empire's window to the world - a cosmopolitan port where merchants, sailors, and artists mingled beneath neoclassical facades. There's no must-see museum, no ruins to tick off. You just walk.</p>

            <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_80,f_auto/shiplife/odessa/odessa-cathedral-park" class="story-image" data-caption="Transfiguration Cathedral from the park - pigeons scatter across the cobblestones." alt="Cathedral from park">

            <h3>The Man Who Built Odessa</h3>
            <p>Prince Mikhail Vorontsov was Governor-General of this region for thirty years. He built the boulevards, the port, the palaces. His statue still stands on Primorsky Boulevard - "from grateful compatriots, 1863." I posed beneath it, arms wide, in a city he would barely recognize.</p>

            <div class="image-row-2">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_80,f_auto/shiplife/odessa/odessa-vorontsov-monument" class="inline-image" data-caption="At the Vorontsov monument - the man who built modern Odessa." alt="Vorontsov monument">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_80,f_auto/shiplife/odessa/odessa-ornate-facade" class="inline-image" data-caption="Ornate facades with caryatids - echoes of empire on every street." alt="Ornate facade">
            </div>

            <h3>Tree-Lined Boulevards</h3>
            <p>The tree-lined boulevards feel European in the best way - cafés spilling onto sidewalks near the Mozart Hotel, old men playing chess in the parks, the Transfiguration Cathedral's dome rising above it all. The architecture still carries imperial grandeur, though the empire is long gone.</p>

            <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_80,f_auto/shiplife/odessa/odessa-cathedral-closeup" class="story-image" data-caption="The cathedral's dome and bell tower - neoclassical splendor." alt="Cathedral closeup">

            <h3>Café Life</h3>
            <p>Eventually you sit. There's no hurry. An omelette, some bruschetta, a coffee that arrives when it arrives. You watch the world go by. Laptop open, sunglasses on, shade from the umbrellas. This is how Odessa works - the city rewards those who slow down.</p>

            <div class="image-row-2">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_80,f_auto/shiplife/odessa/odessa-cafe-candid" class="inline-image" data-caption="Settling into a sidewalk café." alt="Café scene">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_80,f_auto/shiplife/odessa/odessa-cafe-meal" class="inline-image" data-caption="Omelette and bruschetta - a leisurely afternoon." alt="Café meal">
            </div>

            <h3>Before the War</h3>
            <p>This was June 2013. The boulevards were peaceful, the cafés were full, the city's beauty seemed permanent. I hope some of it survives what's come since.</p>

            ${generateGallery('odessa')}
        `,
        fullDesc: "Odessa was once the Russian Empire's window to the world - a cosmopolitan port with neoclassical grandeur. The Transfiguration Cathedral, tree-lined boulevards, sidewalk cafés. This was before the war.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/odessa/odessa-port-sculpture"
    },
    {
        id: 80,
        title: "Kuşadası, Turkey",
        coords: [37.86, 27.26],
        tag: "Near Ancient Ephesus",
        icon: "🏛️",
        isDoor: false,
        shortDesc: "Gateway to one of the ancient world's great cities.",
        useRichContent: true,
        richContent: `
            <p>Kuşadası is the cruise port for ancient Ephesus, but the town itself deserves a wander. The waterfront has a striking sculpture - a giant white hand releasing doves into the sky, with our ship anchored behind it.</p>
            <p>Turkish breakfast is an event: white cheese, olives, tomatoes, cucumbers, honey, eggs fried in a copper pan, and endless bread. Multiple ships crowd the harbor - this is a popular stop on the Aegean circuit.</p>
            <p>Most passengers rush to Ephesus. We lingered here, watching the town wake up.</p>

            ${generateGallery('kusadasi')}
        `,
        fullDesc: "Kuşadası is the cruise port for ancient Ephesus. The waterfront has a striking sculpture - a giant white hand releasing doves. Turkish breakfast is an event: white cheese, olives, honey, eggs in copper pans.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/kusadasi/hand_sculpture.jpg"
    },
    {
        id: 81,
        title: "Mykonos, Greece",
        coords: [37.45, 25.33],
        tag: "Cycladic Icon",
        icon: "🏛️",
        isDoor: false,
        shortDesc: "Windmills, whitewash, and legendary nightlife.",
        useRichContent: true,
        richContent: `
            <div class="story-section-panel">
                <h3>The Cycladic Dream</h3>
                <p>Mykonos is the Cyclades distilled to its essence - windmills, whitewashed walls, and that impossible blue of the Aegean. It's the Greece of postcards, of dreams, of a thousand Instagram feeds.</p>
                <img class="story-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/mykonos/iqhfkemtntijyhepfxae.jpg" alt="Cruise ship" data-caption="Our home at anchor - the ship waits while Mykonos works its magic.">
                <p>We'd anchor offshore and tender in, the white town growing larger until we could pick out the famous windmills on the ridge. The harbor is a riot of superyachts and fishing boats, the water so clear you can count the fish beneath you.</p>
                <img class="story-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/mykonos/ovx558ltylc7yriwzfgt.jpg" alt="Harbor" data-caption="The old harbor - blue dome, turquoise water, and the whitewashed town climbing the hill.">
            </div>

            <div class="story-section-panel">
                <h3>The Maze of Chora</h3>
                <p>The streets of Mykonos Town - Chora - were designed to confuse. Not tourists, but pirates. The narrow, twisting alleys were meant to bewilder raiders, giving locals time to escape or fight back. Now they bewilder visitors in the best possible way.</p>
                <img class="story-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/mykonos/fckjor4pfggvnkwwqgqa.jpg" alt="White alley" data-caption="The maze of Chora - every turn reveals another whitewashed wonder.">
                <p>Every corner is a composition - bougainvillea spilling over a doorway, geraniums cascading down steps, the contrast of red and pink against endless white. The paint is refreshed every year; the effect is timeless.</p>
                <div class="image-row-2">
                    <img class="inline-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/mykonos/img_3130" alt="Red shutters" data-caption="Iconic Cycladic detail - red shutters against brilliant white.">
                    <img class="inline-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/mykonos/img_3131" alt="Blue window" data-caption="Turquoise window framing the endless blue.">
                </div>
                <img class="story-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/mykonos/yyv27n0rvlksrcn29dgy.jpg" alt="Flower alley" data-caption="Geraniums spill down whitewashed steps - the Cyclades in a single frame.">
                <img class="story-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/mykonos/lw2ayxd2wwuetcb0jvdq.jpg" alt="Bougainvillea" data-caption="Bougainvillea cascades over a doorway - red against white, the eternal colors of Greece.">
            </div>

            <div class="story-section-panel">
                <h3>Paraportiani</h3>
                <p>The Church of Panagia Paraportiani is unlike anything else in Greece - five chapels fused into one asymmetric, organic whole over 200 years of construction. It looks like it grew from the earth rather than being built by human hands.</p>
                <img class="story-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/mykonos/kx8jgpebx94sjtsx1gv1.jpg" alt="Paraportiani" data-caption="Paraportiani - five churches fused into one, the most photographed building in Greece.">
                <p>Photographers circle it like moths around a flame, but somehow it never feels crowded. The whitewash catches the light differently every hour; locals say it's never the same church twice.</p>
            </div>

            <div class="story-section-panel">
                <h3>Petros the Pelican</h3>
                <p>Every island needs a character, and Mykonos has Petros - a pelican who has been the unofficial mascot since 1958, when a fisherman found the original Petros injured after a storm. The pelican stayed, and when he died in 1985, Mykonos received a replacement from a Hamburg zoo.</p>
                <img class="story-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/mykonos/awo8a2q078lvol6d4dop.jpg" alt="Petros crowd" data-caption="Petros holds court - tourists gather while the pelican preens.">
                <p>Now there are several pelicans wandering the waterfront, and they know exactly how famous they are. They pose for photos, inspect restaurant tables, and generally behave as if the entire island exists for their amusement.</p>
                <img class="story-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/mykonos/vqfcb2cffwofro0yhdmb.jpg" alt="Petros close-up" data-caption="Petros knows he's famous - and expects to be treated accordingly.">
            </div>

            <div class="story-section-panel">
                <h3>Little Venice</h3>
                <p>Where the houses lean so far over the water that the waves splash the foundations - this is Little Venice, Mykonos's most romantic corner. The 18th-century captains who built these homes wanted to watch their ships from their balconies.</p>
                <div class="image-row-2">
                    <img class="inline-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/mykonos/img_3128" alt="Little Venice" data-caption="Little Venice from the water - balconies hanging over the waves.">
                    <img class="inline-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_auto,f_auto/shiplife/mykonos/img_3129" alt="Waterfront houses" data-caption="Houses built so close the spray reaches the doors.">
                </div>
                <p>Now the ground floors are bars and cafés where you can sip cocktails as the sun drops into the sea. The tables fill by late afternoon; by sunset, there's not an empty seat in sight.</p>
            </div>

            <div class="story-section-panel">
                <h3>The Windmills</h3>
                <p>The windmills of Kato Mili are the island's most famous landmark - a row of 16th-century mills that once ground grain for the ships that called here. They haven't worked in decades, but they remain the symbol of Mykonos.</p>
                <img class="story-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/mykonos/foehrmtcpagjgldkjps7.jpg" alt="Windmills" data-caption="The windmills of Kato Mili - grinding grain for 400 years, now grinding out postcards.">
                <p>At sunset, the ridge fills with photographers and couples watching the light change. It's touristy and romantic and utterly worth it. Some clichés earn their status.</p>
                <img class="story-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/mykonos/img_3145" alt="Windmill ridge" data-caption="The windmill ridge at golden hour - thatch and stone against the sky.">
            </div>

            <div class="story-section-panel">
                <h3>The Harbor</h3>
                <p>The old harbor is where fishing boats still unload their catch and superyachts jostle for position. It's a working port masquerading as a postcard - or perhaps the other way around.</p>
                <img class="story-image" src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/mykonos/img_3148" alt="Harbor panorama" data-caption="Harbor panorama with the windmills standing guard - the definitive Mykonos view.">
            </div>

            ${generateGallery('mykonos', 'More from Mykonos')}
        `,
        fullDesc: "Mykonos is the Cyclades distilled to its essence - windmills, whitewashed walls, and that impossible blue of the Aegean. By day, the labyrinthine streets of Chora are a maze of boutiques and bougainvillea. By night, the island transforms into one of the Mediterranean's great party destinations.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769810900/IMG_20140620_120410_i3ltwo.jpg"
    },
    {
        id: 82,
        title: "Nafplio, Greece",
        coords: [37.57, 22.80],
        tag: "First Capital",
        icon: "🏛️",
        isDoor: false,
        shortDesc: "Greece's first capital, still charming.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">🏛️</span>
                    <span class="demo-value">First Capital</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏰</span>
                    <span class="demo-value">Palamidi Fortress</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">👣</span>
                    <span class="demo-value">999 Steps</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🇬🇷</span>
                    <span class="demo-value">Independence Era</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Town</span>
                <h3 class="section-title-panel">Greece's First Capital</h3>
                <p>Nafplio was Greece's first capital after independence, and you can feel the history in every cobblestone.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/nafplion/img_2944" class="story-image" data-caption="Nafplio's old town - Greece's first capital." alt="Nafplio town">
                <p class="photo-caption-inline">The old town spreads out in a maze of Venetian architecture and neoclassical buildings.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/nafplion/img_2950" class="story-image" data-caption="Streets of Nafplio." alt="Nafplio streets">
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Climb</span>
                <h3 class="section-title-panel">999 Steps to Palamidi</h3>
                <p>The Palamidi Fortress towers 216 meters above the town - 999 steps to the top, they say, though I lost count somewhere around 500. The view from the ancient stone windows makes every step worth it.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/nafplion/img_2965" class="story-image" data-caption="View from Palamidi Fortress." alt="Fortress view">
                <p class="photo-caption-inline">The view from the ancient stone windows - Nafplio spreads below like a map.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/nafplion/img_2972" class="story-image" data-caption="Palamidi Fortress walls." alt="Fortress walls">
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Details</span>
                <h3 class="section-title-panel">Layers of History</h3>
                <p>The Greek bakeries alone are worth the visit. Layers of phyllo, honey, and pistachios - fuel for the climb back down. The town wears its history lightly - Venetian, Ottoman, Greek - each layer visible in the architecture.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/nafplion/img_2975" class="story-image" data-caption="Nafplio's charming details." alt="Nafplio details">
            </div>

            ${generateGallery('nafplion')}
        `,
        fullDesc: "Nafplio was Greece's first capital after independence, and you can feel the history in every cobblestone.\n\nThe Palamidi Fortress towers 216 meters above the town - 999 steps to the top. The view from the ancient stone windows makes every step worth it.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/nafplion/img_2944"
    },
    {
        id: 83,
        title: "Pylos, Greece",
        coords: [36.91, 21.70],
        tag: "Nestor's Kingdom",
        icon: "🏛️",
        isDoor: false,
        shortDesc: "Homer wrote about this bay.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">📜</span>
                    <span class="demo-value">Homer's Odyssey</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏰</span>
                    <span class="demo-value">Ottoman Fortress</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">⚓</span>
                    <span class="demo-value">Navarino Bay</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">⚔️</span>
                    <span class="demo-value">1827 Battle</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Legend</span>
                <h3 class="section-title-panel">Where Homer Set His Story</h3>
                <p>Pylos sits on Navarino Bay, where Homer placed King Nestor's palace in the Odyssey. The bay is still as dramatic as any epic - rocky islands rise from impossibly blue water, natural sea arches frame the horizon.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/pylos/img_2816" class="story-image" data-caption="Navarino Bay - where Homer set King Nestor's palace." alt="Navarino Bay">
                <p class="photo-caption-inline">Navarino Bay - legendary waters where ancient kings once ruled.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Fortress</span>
                <h3 class="section-title-panel">Ottoman Walls, Greek Views</h3>
                <p>The Ottomans built a fortress here that still commands the heights. Walking its walls, you can see why everyone from the Venetians to the Greeks fought over this strategic bay.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/pylos/img_2822" class="story-image" data-caption="The fortress walls of Pylos." alt="Pylos fortress">
                <p class="photo-caption-inline">The fortress walls - silent witnesses to centuries of history.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/pylos/img_2828" class="story-image" data-caption="Views from the fortress." alt="Fortress views">
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The History</span>
                <h3 class="section-title-panel">Battle of Navarino</h3>
                <p>In 1827, the Battle of Navarino in these waters helped secure Greek independence. The combined British, French, and Russian fleet destroyed the Ottoman-Egyptian navy here. Walking these shores, you're walking through history.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/pylos/img_2840" class="story-image" data-caption="The bay where history was made." alt="Pylos bay">
                <p class="photo-caption-inline">Some places make you feel the weight of history. Pylos is one of them.</p>
            </div>

            ${generateGallery('pylos')}
        `,
        fullDesc: "Pylos sits on Navarino Bay, where Homer placed King Nestor's palace in the Odyssey. The bay is still as dramatic as any epic - rocky islands rise from impossibly blue water.\n\nThe Ottomans built a fortress here that still commands the heights. In 1827, the Battle of Navarino helped secure Greek independence.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/pylos/img_2816"
    },
    {
        id: 84,
        title: "Ravenna, Italy",
        coords: [44.42, 12.20],
        tag: "Byzantine Mosaics",
        icon: "🏛️",
        isDoor: false,
        shortDesc: "The mosaics here will leave you speechless.",
        useRichContent: true,
        richContent: `
            <p>Ravenna was the last capital of the Western Roman Empire, and its Byzantine mosaics are among the finest in the world. But I came for something else: Dante's tomb.</p>
            <p>The poet who gave us the Divine Comedy died here in 1321, exiled from his beloved Florence. Florence has begged for his remains for centuries - Ravenna has refused every time. The small neoclassical tomb is surprisingly modest for literature's greatest voice.</p>
            <p>The mosaics in the Basilica of San Vitale are stunning - gold and blue tesserae from the 6th century that still glow. But standing at Dante's final resting place, thinking about exile and art and legacy - that was the real pilgrimage.</p>

            ${generateGallery('ravenna')}
        `,
        fullDesc: "Ravenna was the last capital of the Western Roman Empire, and its Byzantine mosaics are among the finest in the world. But I came for something else: Dante's tomb.\n\nThe poet who gave us the Divine Comedy died here in 1321, exiled from Florence. The small neoclassical tomb is surprisingly modest for literature's greatest voice.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/ravenna/dante_tomb.jpg"
    },
    {
        id: 85,
        title: "Šibenik, Croatia",
        coords: [43.73, 15.89],
        tag: "Cathedral City",
        icon: "⛵",
        isDoor: false,
        shortDesc: "UNESCO-listed cathedral, Game of Thrones location.",
        useRichContent: true,
        richContent: `
            <div class="story-section-panel">
                <p>Šibenik is Croatia's oldest native town on the Adriatic - founded by Croats rather than Greeks or Romans.</p>
                <p>The Cathedral of St. James is the crown jewel, a UNESCO World Heritage Site built entirely of stone and brick with no wooden supports. It took over a century to complete (1431-1536). The fortress above town, St. Michael's, was used as a Game of Thrones filming location for the Iron Bank of Braavos.</p>
                <p>Smaller and quieter than Split or Dubrovnik, Šibenik feels like discovering Croatia before the crowds found it. We anchored in the sheltered channel and tendered ashore to explore its steep medieval streets.</p>
            </div>
            ${generateGallery('sibenik')}
        `,
        fullDesc: "Šibenik is Croatia's oldest native town on the Adriatic - founded by Croats rather than Greeks or Romans.\n\nThe Cathedral of St. James is the crown jewel, a UNESCO World Heritage Site built entirely of stone and brick with no wooden supports. It took over a century to complete (1431-1536). The fortress above town, St. Michael's, was used as a Game of Thrones filming location for the Iron Bank of Braavos.\n\nSmaller and quieter than Split or Dubrovnik, Šibenik feels like discovering Croatia before the crowds found it.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769803667/IMG_1752_xpouvp.jpg"
    },
    {
        id: 86,
        title: "Zakynthos, Greece",
        coords: [37.79, 20.90],
        tag: "Shipwreck Beach",
        icon: "🏛️",
        isDoor: false,
        shortDesc: "That famous beach with the rusted ship.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">🚢</span>
                    <span class="demo-value">Navagio Beach</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🐢</span>
                    <span class="demo-value">Sea Turtles</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">⛪</span>
                    <span class="demo-value">Golden Frescoes</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🦁</span>
                    <span class="demo-value">Venetian History</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Harbor</span>
                <h3 class="section-title-panel">Arrival in Zante</h3>
                <p>Zakynthos - the Italians call it Zante - is famous for Navagio Beach, that Instagram-perfect cove with a rusted shipwreck on white sand. We didn't make it there, but the island had other treasures.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/zakynthos/IMG_1378" class="story-image" data-caption="The harbor of Zakynthos town." alt="Zakynthos harbor">
                <p class="photo-caption-inline">The harbor town curves around the bay - colorful buildings, yachts, and green mountains rising behind.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/zakynthos/IMG_1376" class="story-image" data-caption="Yacht marina with hillside town." alt="Marina view">
                <p class="photo-caption-inline">Through the masts of the marina, the town climbs the hillside.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Town</span>
                <h3 class="section-title-panel">Unhurried Greek Life</h3>
                <p>The harbor town is charming in that unhurried Greek way. Wide squares with palm trees, neoclassical buildings in warm yellows and whites, statues of poets and patriots.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/zakynthos/IMG_1384" class="story-image" data-caption="Main square with statue and neoclassical building." alt="Town square">
                <p class="photo-caption-inline">The main square - neoclassical elegance meets Mediterranean ease.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/zakynthos/IMG_1382" class="story-image" data-caption="Palm-lined square with monument." alt="Town square palms">
                <p class="photo-caption-inline">Palm trees and monuments - Zakynthos has been a crossroads of cultures for centuries.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Churches</span>
                <h3 class="section-title-panel">Centuries of Devotion</h3>
                <p>The Orthodox churches are filled with golden frescoes and stained glass - centuries of devotion in every brushstroke. Step inside and the modern world disappears.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/zakynthos/IMG_1394" class="story-image" data-caption="Orthodox church exterior with golden mosaics." alt="Church exterior">
                <p class="photo-caption-inline">Golden mosaics glint above the entrance - a hint of the treasures inside.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/zakynthos/IMG_1398" class="story-image" data-caption="Church interior with frescoes and chandeliers." alt="Church interior">
                <p class="photo-caption-inline">Inside, frescoes cover every surface. Chandeliers catch the light filtering through stained glass.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/zakynthos/IMG_1400" class="story-image" data-caption="Detail of frescoes and colorful stained glass windows." alt="Fresco detail">
                <p class="photo-caption-inline">Colorful geometric stained glass meets Byzantine frescoes - centuries of art in a single frame.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Food</span>
                <h3 class="section-title-panel">Simple and Perfect</h3>
                <p>And the food. Souvlaki with tzatziki, oregano fries, a squeeze of lemon. Simple and perfect. This is what Greek food is supposed to taste like.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/zakynthos/IMG_1390" class="story-image" data-caption="Souvlaki with oregano fries." alt="Greek food">
                <p class="photo-caption-inline">Souvlaki, oregano fries, fresh lemon. Sometimes the simple things are the best things.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about Zakynthos</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🐢</span>
                        <span>The Flower of the East</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Venetian Name:</strong> The Venetians called it "Fior di Levante" - Flower of the East - for its lush vegetation.</li>
                        <li><strong>Shipwreck Beach:</strong> Navagio Beach's famous shipwreck is the MV Panagiotis, which ran aground in 1980 while allegedly smuggling contraband.</li>
                        <li><strong>Sea Turtles:</strong> The island is home to the National Marine Park, protecting endangered Caretta caretta loggerhead turtles.</li>
                        <li><strong>Dionysios Solomos:</strong> Greece's national poet was born here. He wrote the words to the Greek national anthem.</li>
                        <li><strong>Earthquake:</strong> A devastating earthquake in 1953 destroyed most historic buildings, which is why the town looks relatively new.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('zakynthos')}
        `,
        fullDesc: "Zakynthos is famous for Navagio Beach - that Instagram-perfect cove with a rusted shipwreck. We explored the harbor town, the National Marine Park (home to endangered sea turtles), and Orthodox churches filled with golden frescoes.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/zakynthos/IMG_1378"
    },
    {
        id: 87,
        title: "Itea, Greece",
        coords: [38.43, 22.42],
        tag: "Where It All Began",
        icon: "🏛️",
        isDoor: false,
        shortDesc: "Easter morning, smoke rising - the beginning of everything.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <span>Gulf of Corinth</span>
                <span>Gateway to Delphi</span>
                <span>Orthodox Easter</span>
                <span>May 2013</span>
            </div>

            <h3>I Thought the Island Was on Fire</h3>
            <p>It was early - very early. We'd come a long way to get here. Auckland to Thailand, through Dubai, down the Suez Canal, and finally into the Mediterranean. Itea was our first stop in this new world. I'd bought a new camera in Dubai a week or two before, and I was eager to test it.</p>
            <p>I was the first one on the observation deck that morning, as I was many mornings. Stepping out into the warm, moist air, I saw smoke rising from every hillside. My first thought: the island is on fire.</p>

            <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_80,f_auto/shiplife/itea/itea-deck-smoke-01" class="story-image" data-caption="First one on deck - smoke rising everywhere." alt="Deck view with smoke">

            <h3>Easter Lamb</h3>
            <p>A passenger quickly set me straight. It was Orthodox Easter, and the entire town was roasting lamb. Every family, every patio, every backyard - smoke drifting up into the morning sky. What I'd mistaken for disaster was celebration.</p>

            <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_80,f_auto/shiplife/itea/itea-town-smoke" class="story-image" data-caption="The whole town roasting lamb - smoke from every rooftop." alt="Town with Easter smoke">

            <h3>Lemon Trees and Lamb</h3>
            <p>Walking through town, the air was literally scented with lemon trees and roasting meat. Everyone was out on their patios - I never learned the Greek word for them - and several groups called out to me. Invitations to drink and dine and smile at each other, because I did not know their language. Again.</p>

            <div class="image-row-2">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_80,f_auto/shiplife/itea/itea-church-01" class="inline-image" data-caption="Lamb on the spit - the source of all that smoke." alt="Lamb roasting">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_80,f_auto/shiplife/itea/itea-church-02" class="inline-image" data-caption="Invitations to drink and celebrate with the locals." alt="Drinking with locals">
            </div>

            <h3>The Churches</h3>
            <p>Walking by the beautiful churches awakened me to what the rest of this contract really meant. Exploration of spaces, art, music, craftsmanship - the beauty of man's will to mold nature to his cause.</p>

            <div class="image-row-2">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_80,f_auto/shiplife/itea/itea-church-03" class="inline-image" data-caption="Greek Orthodox churches on Easter morning." alt="Church">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_80,f_auto/shiplife/itea/itea-scene-01" class="inline-image" data-caption="Centuries of faith built into stone." alt="Church">
            </div>

            <h3>Taking a Little from Each Place</h3>
            <p>It occurred to me several times during this first contract in the Med that I was missing so much more than my eyes could see. Maybe I would be better equipped to understand life if I took a little bit away from each location I visited.</p>
            <p>Most of the time, I tried to take too much in at once. With only a spare sea day to recover from the events of the day before, I ended up exhausting myself by the end of those four months.</p>

            <blockquote class="story-quote">Itea was really the beginning of a historical journey that would change how I see the world and myself in it.</blockquote>

            <h3>The Memorials</h3>
            <p>Even a small port town like Itea carries the weight of history. Two war memorials stand in the town center - one to the resistance fighters of 1941-1944, another to the Greek mothers who sent their sons to war. "Magnanimous Mother - in pain and in glory."</p>

            <div class="image-row-2">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_80,f_auto/shiplife/itea/itea-resistance-memorial" class="inline-image" data-caption="Memorial to the National Resistance, 1941-1944." alt="Resistance memorial">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_80,f_auto/shiplife/itea/itea-war-memorial" class="inline-image" data-caption="Magnanimous Mother - in pain and in glory." alt="War memorial">
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about Itea</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🏛️</span>
                        <span>Gateway to Delphi</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>The Oracle:</strong> Itea is the port for Delphi, where the ancient Greeks consulted the Oracle for prophecy. The site is 15km up the mountain.</li>
                        <li><strong>Mount Parnassus:</strong> The mountain rising above Itea was sacred to Apollo and the Muses - home of poetry and music in Greek mythology.</li>
                        <li><strong>Orthodox Easter:</strong> Greek Easter often falls on a different date than Western Easter. The lamb roasting tradition (souvla) is central to the celebration.</li>
                        <li><strong>Gulf of Corinth:</strong> The narrow gulf separates mainland Greece from the Peloponnese. The town has been a port since ancient times.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('itea')}
        `,
        fullDesc: "Easter morning in Itea - I thought the island was on fire. Smoke rising from every hillside. A passenger explained: the whole town was roasting lamb. This was the beginning of everything.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/itea/itea-easter-morning-hero"
    },
    {
        id: 89,
        title: "Semarang, Indonesia",
        coords: [-6.97, 110.42],
        tag: "Gateway to Borobudur",
        icon: "🛕",
        isDoor: false,
        shortDesc: "The world's largest Buddhist temple rises from the jungle.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <span>Central Java</span>
                <span>Built 9th Century</span>
                <span>UNESCO Site</span>
                <span>September 2011</span>
            </div>

            <h3>Emerging from the Jungle</h3>
            <p>Semarang is just a port town. The real destination lies inland - Borobudur, the largest Buddhist temple in the world. Built in the 9th century, buried under volcanic ash for a thousand years, rediscovered in 1814. Nothing prepares you for the scale of it.</p>

            <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_80,f_auto/shiplife/semarang/semarang-borobudur-temple-01" class="story-image" data-caption="Ready to explore - conical hat borrowed from a vendor." alt="At the temple base">

            <h3>A Stone Mountain of Stories</h3>
            <p>The temple is essentially a stone textbook - 2,672 relief panels telling the story of Buddha's life and teachings. You're supposed to walk clockwise, reading the panels as you ascend. Each level represents a stage on the path to enlightenment.</p>

            <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_80,f_auto/shiplife/semarang/semarang-borobudur-temple-04" class="story-image" data-caption: "Relief panel detail - a thousand years old, still telling stories." alt="Relief panels">

            <h3>The Corridors</h3>
            <p>Walking the narrow corridors between the relief walls, you feel the weight of history. Pilgrims have walked these same paths for over a millennium. The carvings show daily life in 9th-century Java - ships, musicians, dancers, farmers. It's a window into a vanished world.</p>

            <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_80,f_auto/shiplife/semarang/semarang-borobudur-temple-03" class="story-image" data-caption="Walking the relief-lined corridors." alt="Temple corridors">

            <h3>The Stupas</h3>
            <p>At the top, the architecture changes. The relief panels give way to 72 bell-shaped stupas, each containing a Buddha statue visible through the diamond-shaped holes. Touch a Buddha through the opening for good luck - everyone does.</p>

            <div class="image-row-2">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_80,f_auto/shiplife/semarang/semarang-borobudur-temple-05" class="inline-image" data-caption="Guide explaining the upper terraces." alt="Guide at stupas">
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_600,q_80,f_auto/shiplife/semarang/semarang-borobudur-temple-06" class="inline-image" data-caption="Among the bell-shaped stupas." alt="At the stupas">
            </div>

            <h3>Looking Out Over Java</h3>
            <p>From the upper levels, the view stretches across the Javanese plains to distant volcanoes. The temple was built here deliberately - aligned with the surrounding mountains in a sacred geography that the Sailendra dynasty understood twelve centuries ago.</p>

            <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_80,f_auto/shiplife/semarang/semarang-borobudur-temple-02" class="story-image" data-caption="Looking out over the Javanese plains." alt="View from temple">

            <h3>Javanese Culture</h3>
            <p>The excursion included a stop at a cultural center where gamelan musicians played while a dalang (puppeteer) manipulated wayang shadow puppets. The same stories depicted on Borobudur's walls are still performed today - a living thread connecting modern Java to its ancient past.</p>

            <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_80,f_auto/shiplife/semarang/semarang-borobudur-temple-07" class="story-image" data-caption="Gamelan orchestra with wayang puppets in the background." alt="Gamelan musicians">

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about Borobudur</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🛕</span>
                        <span>The World's Largest Buddhist Temple</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Construction:</strong> Built around 800 AD during the Sailendra dynasty, using an estimated 2 million stone blocks without mortar.</li>
                        <li><strong>Lost and Found:</strong> Abandoned in the 14th century, buried by volcanic ash and jungle, rediscovered by Sir Stamford Raffles in 1814.</li>
                        <li><strong>Relief Panels:</strong> 2,672 individual panels stretching 5 km if laid end-to-end - the largest collection of Buddhist reliefs in the world.</li>
                        <li><strong>Buddha Statues:</strong> 504 Buddha statues, 72 of them seated inside the perforated stupas on the upper terraces.</li>
                        <li><strong>Restoration:</strong> Major UNESCO restoration 1975-1982 dismantled and rebuilt the temple, adding drainage to prevent collapse.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('semarang')}
        `,
        fullDesc: "Semarang is the gateway to Borobudur - the largest Buddhist temple in the world. Built in the 9th century, buried under volcanic ash for a thousand years, rediscovered in 1814. Nothing prepares you for the scale.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/shiplife/semarang/semarang-borobudur-hero"
    },
    {
        id: 92,
        title: "Phuket, Thailand",
        coords: [7.88, 98.39],
        tag: "A Lesson I'll Never Forget",
        icon: "🏝️",
        isDoor: false,
        shortDesc: "Thailand's island jewel - and a close call.",
        imagePosition: "center",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">📍</span>
                    <span class="demo-value">Andaman Sea</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏖️</span>
                    <span class="demo-value">Patong Beach</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🙏</span>
                    <span class="demo-value">Thailand</span>
                </div>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">Paradise</span>
                <h3 class="section-title-panel">Thailand's Island Jewel</h3>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768865640/IMG_20131113_105615_yzzp1y.jpg" class="story-image" data-caption="Temple gate in Phuket." alt="Temple gate, Phuket">
                <p class="photo-caption-inline">Phuket's temples and traditions.</p>
                <p>Phuket taught me a lesson I'll never forget.</p>
                <p>The Cruise Director had given me the day off - a rare occurrence on an overnight. A walk through town. Looking for something to eat, maybe a drink.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The Night</span>
                <h3 class="section-title-panel">One Beer. One Shot. One Roofie.</h3>
                <p>I found a bar with giant jungle animals painted on the walls. Seemed friendly enough. I sat down and started chatting with the bloke next to me - a "shoe salesman from Croatia," or so he said.</p>
                <p>A few minutes into our conversation, one of the girls from behind the bar got off work - or so she said - and sat down on my other side.</p>
                <p>Just friendly conversation. My radar was up, and I didn't sense anything was off.</p>
                <p>One beer. One shot.</p>
                <p>Then the woman asked if I was alone. Something finally clicked. I waved to a bunch of random people in the corner like I knew them.</p>
                <p>The next thing I remember, I'm stumbling toward the bathroom. Then nothing.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The Rescue</span>
                <h3 class="section-title-panel">The Reason I'm Still Here</h3>
                <p>I woke up slouched against a urinal. I couldn't stand. I couldn't think straight.</p>
                <p>Then I heard a voice: "Hey - that's Derrick!"</p>
                <p>A hand grabbed me. Pulled my arm over a shoulder. Got me out of there.</p>
                <p>Martin Neely. A fellow musician. A friend. I may have had a few more minutes before I was robbed - or worse - when he walked in and saw me.</p>
                <p>Here's the thing: I had walked around Phuket all day. Downtown, the beaches, everywhere. I hadn't run into a single crew member. Not one. And then, the one moment I really needed someone - there was Martin.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768866121/IMG_19700105_041151_dliaia.jpg" class="story-image" data-caption="My good friends Martin Neely and Yolonda Barber - Martin is the reason I'm still here to tell this story." alt="Martin Neely and Yolonda Barber">
                <p class="photo-caption-inline">My good friends Martin Neely and Yolonda Barber. Martin is the reason I'm still here to tell this story.</p>
                <p>He got me back to the ship safely. No incident report. No questions. Just back on board, alive, lesson learned the hard way.</p>
                <p>Unreal, right? Close call.</p>
            </div>
            
            <div class="story-section-panel">
                <span class="section-tag-panel">The Beauty</span>
                <h3 class="section-title-panel">What Phuket Should Be</h3>
                <p>Despite everything, Phuket is beautiful. The beaches, the sunsets, the food carts on every corner. I went back to the island on later trips - carefully. And I saw the Phuket that most people see.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768865557/PANO_20131118_134025_qd3r7o.jpg" class="story-image" data-caption="Beach day panorama - Phuket." alt="Phuket beach panorama">
                <p class="photo-caption-inline">The Phuket you're supposed to remember.</p>
                
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1768865556/IMG_20131118_135639_wcs0ae.jpg" class="story-image" data-caption="Fresh fruit cart - Phuket streets." alt="Fruit cart">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1768865556/IMG_20131118_164928_wge65r.jpg" class="story-image" data-caption="Patong Beach entrance at evening." alt="Patong Beach entrance">
                </div>
                
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/v1768865557/PANO_20131118_182257_b9tvli.jpg" class="story-image" data-caption="Sunset over Phuket." alt="Phuket sunset panorama">
                <p class="photo-caption-inline">Sunset over the Andaman Sea.</p>
                
                <div class="story-gallery-grid">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1768865679/IMG_20131118_184137_1_toim78.jpg" class="story-image" data-caption="Making friends with the local wildlife." alt="Derrick with iguana">
                    <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1768865556/IMG_20131118_184140_zmbgko.jpg" class="story-image" data-caption="Another day in paradise." alt="Phuket evening">
                </div>
            </div>
            
            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about this location</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🏝️</span>
                        <span>Phuket, Thailand</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Thailand's Largest Island:</strong> Phuket is roughly the size of Singapore, with about 400,000 permanent residents and millions of tourists annually.</li>
                        <li><strong>The Andaman Pearl:</strong> Known as the "Pearl of the Andaman," Phuket sits in the Andaman Sea on Thailand's west coast.</li>
                        <li><strong>Patong Beach:</strong> The most famous and busiest beach on the island, known for its nightlife and tourist infrastructure.</li>
                        <li><strong>2004 Tsunami:</strong> Phuket was heavily impacted by the Boxing Day tsunami. Many memorials and warning systems now exist across the island.</li>
                        <li><strong>Drink Spiking Warning:</strong> Unfortunately common in tourist areas worldwide. Never leave drinks unattended, and travel with trusted friends.</li>
                    </ul>
                </div>
            </div>
            
            ${generateGallery('phuket')}
        `,
        fullDesc: "Phuket taught me a lesson I'll never forget. A night off, a bar with jungle animals painted on the walls, friendly strangers. One beer. One shot. Then nothing. I woke up in a strange room. My friend Martin is the reason I'm still here to tell this story.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1768865557/PANO_20131118_134025_qd3r7o.jpg"
    },
        {
        id: 94,
        title: "Suva, Fiji",
        coords: [-18.14, 178.44],
        tag: "South Pacific Hub",
        icon: "🏝️",
        isDoor: false,
        shortDesc: "Fiji's vibrant capital.",
        fullDesc: "Placeholder description for Suva.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769814482/fiji_xrsums.jpg"
    },
            {
        id: 99,
        title: "Lima, Peru",
        coords: [-12.05, -77.04],
        tag: "City of Kings",
        icon: "🏛️",
        isDoor: false,
        shortDesc: "Peru's sprawling capital on the Pacific.",
        fullDesc: "Placeholder description for Lima.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769815535/20200305_125007_ulpo5m.jpg"
    },
    {
        id: 100,
        title: "Valparaíso, Chile",
        coords: [-33.05, -71.62],
        tag: "Bohemian Port",
        icon: "🎨",
        isDoor: false,
        useRichContent: true,
        shortDesc: "Chile's colorful, artistic port city.",
        fullDesc: "Pablo Neruda kept a house here, perched on a hillside overlooking the harbor. He called Valparaíso 'a pile of absurd houses.' He meant it as a compliment. The city climbs 42 hills, connected by funiculars and covered in street art.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1770191493/Screen_Shot_2026-02-04_at_2.52.06_AM.png",
        richContent: `
            <div class="story-section-panel">
                <span class="section-tag-panel">The Poet</span>
                <h3 class="section-title-panel">Neruda's City</h3>
                <p>Pablo Neruda kept three houses in Chile. The one in Valparaíso—La Sebastiana—was his favorite.</p>
                <p>He called this city "a pile of absurd houses." If you've seen how the buildings stack up the hillsides, defying gravity and urban planning, you understand. It was a compliment.</p>
                <p>Neruda loved this place for its chaos, its color, its refusal to be organized. The city still feels that way.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Ascensores</span>
                <h3 class="section-title-panel">Riding the Funiculars</h3>
                <p>Valparaíso has 42 hills. Walking them would kill you. So they built funiculars—ascensores—rickety wooden cars that climb at alarming angles.</p>
                <p>Some date back to the 1880s. They creak and sway. The views justify the anxiety.</p>
                <p>At the top, every surface is covered in murals. Street art isn't vandalism here; it's civic pride. The whole city is a gallery.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about this location</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🎨</span>
                        <span>The Bohemian Port</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>UNESCO Site:</strong> The historic quarter has been a World Heritage Site since 2003.</li>
                        <li><strong>The Funiculars:</strong> Of the original 30 ascensores, about 7 still operate. Some are over 130 years old.</li>
                        <li><strong>Naval History:</strong> Chile's navy is headquartered here. The city played a key role in the War of the Pacific.</li>
                        <li><strong>New Year's Eve:</strong> The largest fireworks display in South America happens here—over the harbor.</li>
                    </ul>
                </div>
            </div>
        `
    },
                {
        id: 122,
        title: "Castro, Chile",
        coords: [-42.48, -73.76],
        tag: "Chiloé Island",
        icon: "⛪",
        isDoor: false,
        shortDesc: "Colorful stilted houses and wooden churches.",
        fullDesc: "Castro is the capital of Chiloé Island, famous for its palafitos (colorful houses on stilts) and UNESCO-listed wooden churches. The island has its own mythology, cuisine, and way of life distinct from mainland Chile.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769799840/IMG_6655_rwwdum.jpg"
    },
            {
        id: 107,
        title: "Buenos Aires, Argentina",
        coords: [-34.60, -58.38],
        tag: "Paris of the South",
        icon: "💃",
        isDoor: false,
        shortDesc: "Tango, steak, and faded grandeur.",
        imagePosition: "center",
        useRichContent: true,
        richContent: `
            <div class="story-section-panel">
                <p>Buenos Aires is where Europe came to South America and never quite left. The wide boulevards, the ornate architecture, the cafes where people sit for hours - it all feels like Paris, but with better steak and tango.</p>
            </div>

            ${generateGallery('buenosAires')}
        `,
        fullDesc: "Buenos Aires is where Europe came to South America and never quite left. The wide boulevards, the ornate architecture, the cafes where people sit for hours - it all feels like Paris, but with better steak and tango.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769806999/IMG_6420_qzn455.jpg"
    },
        {
        id: 109,
        title: "Recife, Brazil",
        coords: [-8.05, -34.88],
        tag: "Venice of Brazil",
        icon: "⚓",
        isDoor: false,
        shortDesc: "Bridges, beaches, and colonial history.",
        useRichContent: true,
        richContent: `
            <p>Recife is called the Venice of Brazil for its many bridges crossing the rivers that crisscross the city.</p>
            <p>The old port area at Marco Zero features the famous Parque das Esculturas, showcasing the surreal ceramic works of local artist Francisco Brennand.</p>

            ${generateGallery('recife')}
        `,
        fullDesc: "Recife is called the Venice of Brazil for its many bridges crossing the rivers that crisscross the city.\n\nThe old port area at Marco Zero features the famous Parque das Esculturas, showcasing the surreal ceramic works of local artist Francisco Brennand.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769825894/recife_mlr7ts.jpg"
    },
    {
        id: 123,
        title: "Ponza, Italy",
        coords: [40.895, 12.958],
        tag: "Pontine Islands",
        icon: "🏝️",
        isDoor: false,
        shortDesc: "Ancient Roman hideaway in the Tyrrhenian Sea.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">🏛️</span>
                    <span class="demo-value">Roman Ruins</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🌋</span>
                    <span class="demo-value">Volcanic</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🎨</span>
                    <span class="demo-value">Pastel Harbor</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">⚓</span>
                    <span class="demo-value">Tender Port</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Approach</span>
                <h3 class="section-title-panel">Volcanic Island in the Tyrrhenian</h3>
                <p>Ponza rises from the sea like a secret - volcanic cliffs, hidden coves, and an island that most tourists have never heard of. This is where Romans escape when they want to disappear.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/ponza/IMG_5165" class="story-image" data-caption="Ponza's volcanic profile rising from the Tyrrhenian Sea." alt="Ponza island approach">
                <p class="photo-caption-inline">The island's volcanic profile emerges as you approach - white cliffs and green hills.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/ponza/IMG_5210" class="story-image" data-caption="The Seabourn anchored off Ponza's cliffs." alt="Ship at anchor">
                <p class="photo-caption-inline">The ship anchors offshore - Ponza's harbor is too small for cruise ships, so it's tender boats from here.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Harbor</span>
                <h3 class="section-title-panel">Pastel Paradise</h3>
                <p>The harbor is a curve of pastel-colored houses - pink, yellow, orange, white - stacked up the hillside like a painter's palette. Fishing boats bob in the turquoise water. It's the Italy you imagine but rarely find.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/ponza/IMG_5170" class="story-image" data-caption="Ponza's colorful harbor with fishing boats." alt="Ponza harbor">
                <p class="photo-caption-inline">Fishing boats and pastel buildings - this is the real Italy.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/ponza/IMG_5180" class="story-image" data-caption="The harbor framed by bougainvillea." alt="Harbor with flowers">
                <p class="photo-caption-inline">Bougainvillea frames the view - every angle is a postcard.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/ponza/IMG_5176" class="story-image" data-caption="Harbor panorama with boats and colorful buildings." alt="Harbor panorama">
                <p class="photo-caption-inline">The whole harbor curves around you - fishing boats, coast guard, and ferries to the mainland.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Roman History</span>
                <h3 class="section-title-panel">Two Thousand Years of Secrets</h3>
                <p>The Romans discovered Ponza's charms long before any tourist brochure. They carved grottoes and cisterns into the volcanic cliffs - some for water storage, some for fish farming, some for pleasures best left to imagination. Emperor Augustus exiled his daughter Julia here. The caves remain.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/ponza/IMG_5214" class="story-image" data-caption="Roman grottoes carved into Ponza's volcanic cliffs." alt="Roman grottoes">
                <p class="photo-caption-inline">Roman grottoes carved into the cliff face two thousand years ago - still here, still mysterious.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Village</span>
                <h3 class="section-title-panel">Island Life</h3>
                <p>Beyond the harbor, the village climbs the hillside in a maze of narrow streets. Church domes rise above the rooftops. Old men sit in the shade. Time moves differently on islands.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/ponza/IMG_5205" class="story-image" data-caption="Village street with church dome." alt="Ponza village">
                <p class="photo-caption-inline">Every corner reveals another view - church domes, sea glimpses, lives lived slowly.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/ponza/IMG_5190" class="story-image" data-caption="Ponza's dramatic coastline and bays." alt="Coastal view">
                <p class="photo-caption-inline">The coastline is all dramatic cliffs and hidden coves - beaches accessible only by boat.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Cemetery</span>
                <h3 class="section-title-panel">Where Land Meets Sky</h3>
                <p>The island cemetery sits on the clifftop, tombs carved into the volcanic rock, the sea stretching to the horizon. It's one of those places that makes you think about time differently.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/ponza/IMG_5197" class="story-image" data-caption="Clifftop cemetery with sea views." alt="Cemetery and sea">
                <p class="photo-caption-inline">The dead have the best views on Ponza - sea and sky forever.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/ponza/IMG_5203" class="story-image" data-caption="Rock-cut tombs beneath the lighthouse." alt="Rock tombs">
                <p class="photo-caption-inline">Tombs carved into the living rock, the lighthouse keeping watch above.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about Ponza</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🏝️</span>
                        <span>The Pontine Islands</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Roman Exile:</strong> Emperor Augustus banished his daughter Julia to Ponza in 2 BC for adultery. She died there after 20 years.</li>
                        <li><strong>Mussolini's Prison:</strong> The dictator was briefly imprisoned on Ponza in 1943 after his arrest.</li>
                        <li><strong>Volcanic Origin:</strong> The Pontine Islands are the remnants of ancient volcanic activity, with dramatic cliffs and sea caves.</li>
                        <li><strong>Roman Engineering:</strong> The Romans built an elaborate system of cisterns and tunnels, some of which are still visible today.</li>
                        <li><strong>Local Secret:</strong> Ponza remains largely unknown to international tourists - it's where Romans go to escape other tourists.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('ponza')}
        `,
        fullDesc: "Ponza is the largest of the Pontine Islands, a volcanic archipelago off the coast between Rome and Naples.\n\nThe Romans carved cisterns and grottoes into these cliffs two thousand years ago. The harbor is ringed with pastel houses, and the beaches are accessible only by boat. This is where Romans escape when they want to disappear.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/ponza/IMG_5175"
    },
    {
        id: 130,
        title: "Lipari, Italy",
        coords: [38.4674, 14.954],
        tag: "Aeolian Islands",
        icon: "🌋",
        isDoor: false,
        shortDesc: "Volcanic island jewel off the coast of Sicily.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">🌋</span>
                    <span class="demo-value">Volcanic</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏰</span>
                    <span class="demo-value">Bronze Age Castle</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">💨</span>
                    <span class="demo-value">Aeolus' Home</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🪨</span>
                    <span class="demo-value">Obsidian Trade</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Approach</span>
                <h3 class="section-title-panel">First Glimpse</h3>
                <p>The citadel appears first - a cathedral and bell tower rising from volcanic cliffs, fortified since the Bronze Age. This has been a landmark for Mediterranean sailors for five thousand years.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/lipari/20150518_114416" class="story-image" data-caption="Panoramic view of Lipari's harbor and town." alt="Lipari harbor panorama">
                <p class="photo-caption-inline">The harbor curves around the bay - boats, hotels, and green volcanic hills stretching to the horizon.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/lipari/img_5151" class="story-image" data-caption="The citadel rising above Lipari's rooftops." alt="Citadel view">
                <p class="photo-caption-inline">The citadel rises above the town's terracotta rooftops, ancient walls on volcanic rock.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/lipari/img_5152" class="story-image" data-caption="Lipari's dramatic skyline." alt="Lipari skyline">
                <p class="photo-caption-inline">Cathedral, bell tower, and fortress - a silhouette unchanged for centuries.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Ships in the Bay</span>
                <h3 class="section-title-panel">Where Old Meets New</h3>
                <p>We weren't the only ship drawn to these waters. A tall-masted sailing ship anchored nearby - a reminder that these islands have attracted sailors since Odysseus passed through.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/lipari/IMG_5156" class="story-image" data-caption="Tall ship seen from the Seabourn deck." alt="Tall ship">
                <p class="photo-caption-inline">Two worlds meeting - the Seabourn's deck and a tall ship against the volcanic hills.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/lipari/20150518_113809" class="story-image" data-caption="The Seabourn Odyssey from shore." alt="Seabourn from shore">
                <p class="photo-caption-inline">The Odyssey from shore - waves crashing on volcanic rocks in the foreground.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">Keeper of the Winds</span>
                <h3 class="section-title-panel">Where Mythology Lives</h3>
                <p>The Greeks believed Aeolus, keeper of the winds, lived in these islands. He gave Odysseus a bag of winds for his journey home - a gift that went badly wrong. A sculpture on the waterfront honors the old stories.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/lipari/20150518_105801" class="story-image" data-caption="Aeolus sculpture on the Lipari waterfront." alt="Aeolus sculpture">
                <p class="photo-caption-inline">Aeolus in iron - the wind god who ruled these islands in myth.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/lipari/20150518_105329" class="story-image" data-caption="Volcanic rocks and crashing waves." alt="Volcanic shore">
                <p class="photo-caption-inline">The volcanic shore - black rocks and white foam, the raw material of the islands.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Town</span>
                <h3 class="section-title-panel">Island Life</h3>
                <p>Beyond the mythology, Lipari is a working island. Hotels line the waterfront, boats come and go, and life moves at the pace of the tides.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/lipari/20150518_110104" class="story-image" data-caption="Lipari waterfront promenade." alt="Waterfront">
                <p class="photo-caption-inline">The waterfront promenade - ivy-covered buildings and the sea never far away.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/lipari/20150518_114416" class="story-image" data-caption="Lipari harbor panorama." alt="Harbor view">
                <p class="photo-caption-inline">The harbor curves around the bay - boats, hotels, and green volcanic hills.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Streets</span>
                <h3 class="section-title-panel">Sicilian Island Charm</h3>
                <p>The streets of Lipari have that particular Italian island feeling - small hotels, cafes, the sense that nobody is in any particular hurry.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/lipari/20150518_114633" class="story-image" data-caption="Town street with hotels." alt="Town street">
                <p class="photo-caption-inline">Hotel Carasco and the main street - island life at its most relaxed.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/lipari/20150518_114833" class="story-image" data-caption="Hotel Sabbie D'Oro." alt="Hotel sign">
                <p class="photo-caption-inline">Hotel Sabbie D'Oro - "Golden Sands" - with palms and Mediterranean sky.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about Lipari</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🌋</span>
                        <span>The Aeolian Islands</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Aeolus' Kingdom:</strong> In Greek mythology, Aeolus lived here and gave Odysseus a bag of winds. His crew opened it prematurely, blowing them off course.</li>
                        <li><strong>Obsidian Trade:</strong> Lipari's volcanic obsidian was traded across the Mediterranean in prehistoric times - sharper than metal and highly prized.</li>
                        <li><strong>5,000 Years:</strong> The citadel has been continuously inhabited since at least 3000 BC, making it one of Europe's oldest settlements.</li>
                        <li><strong>UNESCO World Heritage:</strong> The Aeolian Islands became a UNESCO site in 2000 for their volcanic geology and cultural history.</li>
                        <li><strong>Seven Sisters:</strong> Lipari is the largest of seven volcanic islands including Stromboli (still actively erupting) and Vulcano.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('lipari')}
        `,
        fullDesc: "Lipari is the largest and most developed of the Aeolian Islands, a volcanic archipelago north of Sicily.\n\nThe Greeks called these islands home to Aeolus, keeper of the winds. The castle that dominates the harbor has been fortified since the Bronze Age.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/lipari/IMG_5154"
    },
    {
        id: 124,
        title: "Amalfi, Italy",
        coords: [40.0, 15.5],
        tag: "Amalfi Coast",
        icon: "⛪",
        isDoor: false,
        shortDesc: "Where the cathedral rises from the sea.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">⛪</span>
                    <span class="demo-value">9th Century Cathedral</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏛️</span>
                    <span class="demo-value">Maritime Republic</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🍋</span>
                    <span class="demo-value">Limoncello Origin</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">⛵</span>
                    <span class="demo-value">Tall Ships</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Waterfront</span>
                <h3 class="section-title-panel">Where Sailors Still Gather</h3>
                <p>Amalfi's beach stretches along the shore, beach clubs and restaurants lining the waterfront. A tall ship anchors in the bay - a reminder that this coast has drawn sailors for a thousand years.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/amalfi/img_7019" class="story-image" data-caption="Amalfi waterfront with tall ship in the bay." alt="Amalfi waterfront">
                <p class="photo-caption-inline">Beach clubs and umbrellas, a tall ship on the horizon - the Amalfi Coast at its finest.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/amalfi/img_7021" class="story-image" data-caption="Harbor promenade with flowers." alt="Harbor view">
                <p class="photo-caption-inline">Flowers line the promenade, the town climbing the cliffs behind.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/amalfi/img_7004" class="story-image" data-caption="Colorful buildings against dramatic cliffs." alt="Cliff architecture">
                <p class="photo-caption-inline">Pastel buildings cling to impossible cliffs - laundry drying in the Mediterranean sun.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/amalfi/img_7022" class="story-image" data-caption="Amalfi coastline." alt="Coastal view">
                <p class="photo-caption-inline">The famous coast stretches toward Positano and beyond.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Town</span>
                <h3 class="section-title-panel">Vertical Living</h3>
                <p>Amalfi clings to cliffs so steep the streets become staircases. The cathedral rises above the piazza, its Arab-Norman facade a testament to centuries of Mediterranean trade. Cafes fill every corner, tourists and locals mixing in the summer heat.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/amalfi/img_6993" class="story-image" data-caption="Steep streets climbing the cliffside." alt="Steep street">
                <p class="photo-caption-inline">The streets climb straight up - scooters parked impossibly, buildings carved into rock.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/amalfi/img_6995" class="story-image" data-caption="Town architecture." alt="Town view">
                <p class="photo-caption-inline">Layer upon layer of Mediterranean life stacked against the mountain.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/amalfi/img_6997" class="story-image" data-caption="Piazza with cathedral bell tower." alt="Piazza scene">
                <p class="photo-caption-inline">The piazza buzzes with life - cafes, ceramics, and the cathedral bell tower watching over all.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/amalfi/img_6999" class="story-image" data-caption="Street scene." alt="Street view">
                <p class="photo-caption-inline">Narrow lanes wind through the old town, every corner a postcard.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/amalfi/img_7005" class="story-image" data-caption="Town detail." alt="Architecture detail">
                <p class="photo-caption-inline">A thousand years of history in every weathered wall.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/amalfi/img_7007" class="story-image" data-caption="Amalfi scene." alt="Town scene">
                <p class="photo-caption-inline">Life happens vertically here - up stairs, down alleys, across terraces.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/amalfi/img_7009" class="story-image" data-caption="Local architecture." alt="Buildings">
                <p class="photo-caption-inline">The maritime republic that once rivaled Venice lives on in every stone.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/amalfi/img_7017" class="story-image" data-caption="Amalfi detail." alt="Town detail">
                <p class="photo-caption-inline">Lemon groves terrace the hillsides - this is where limoncello was born.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/amalfi/img_7018" class="story-image" data-caption="Coastal view." alt="Coast">
                <p class="photo-caption-inline">The coast that launched a thousand postcards.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/amalfi/img_7020" class="story-image" data-caption="Amalfi scene." alt="Town view">
                <p class="photo-caption-inline">Where the mountain meets the sea, Amalfi found a way to exist.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about Amalfi</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">⛪</span>
                        <span>The Maritime Republic</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Maritime Power:</strong> Amalfi was one of Italy's four great maritime republics, rivaling Venice, Genoa, and Pisa in the medieval Mediterranean.</li>
                        <li><strong>Amalfi Tables:</strong> The Tabula Amalphitana was one of the oldest maritime codes, governing Mediterranean trade for centuries.</li>
                        <li><strong>The Cathedral:</strong> Built in the 9th century, the Cathedral of Saint Andrew houses the apostle's relics, brought from Constantinople.</li>
                        <li><strong>Limoncello:</strong> The famous lemon liqueur originated on this coast, made from the sfusato amalfitano lemons grown on terraced hillsides.</li>
                        <li><strong>UNESCO Site:</strong> The Amalfi Coast became a World Heritage Site in 1997 for its natural beauty and cultural landscape.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('amalfi')}
        `,
        fullDesc: "Amalfi was once a maritime republic rivaling Venice and Genoa.\n\nThe cathedral dominates the piazza, its Arab-Norman facade climbing 62 steps above the crowds. The town clings to cliffs so steep that the streets become staircases. Lemon groves terrace the hillsides. The coast that bears its name is one of the most beautiful drives on Earth.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/amalfi/img_7000"
    },
    {
        id: 133,
        title: "Sorrento, Italy",
        coords: [40.626, 14.376],
        tag: "Lemon Groves & Cliffs",
        icon: "🍋",
        isDoor: false,
        shortDesc: "Perched above the Bay of Naples.",
        imagePosition: "center",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">🍋</span>
                    <span class="demo-value">Limoncello Country</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🌋</span>
                    <span class="demo-value">View of Vesuvius</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🏖️</span>
                    <span class="demo-value">Clifftop Town</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">⛴️</span>
                    <span class="demo-value">Gateway to Capri</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Approach</span>
                <h3 class="section-title-panel">Cliffs Rising from the Sea</h3>
                <p>Sorrento doesn't greet you - it reveals itself. As the ship rounds the point, the town materializes: a cascade of pastel buildings clinging to cliffs that drop straight into the Tyrrhenian Sea. Vesuvius smokes on the horizon.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/20150609_123556" class="story-image" data-caption="Approaching Sorrento." alt="Sorrento approach">
                <p class="photo-caption-inline">The cliffs rise impossibly high - hotels and villas perched on the edge.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_5763" class="story-image" data-caption="Sorrento coastline." alt="Coastline">
                <p class="photo-caption-inline">The famous coastline stretches toward Positano and Amalfi.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_0872" class="story-image" data-caption="Harbor view." alt="Harbor">
                <p class="photo-caption-inline">Marina Piccola - where ferries depart for Capri beneath the clifftop hotels.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_5765" class="story-image" data-caption="Town view." alt="Town">
                <p class="photo-caption-inline">The town perches high above the water - a cascade of terracotta and pastel.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/20150804_114120" class="story-image" data-caption="Coastal panorama." alt="Panorama">
                <p class="photo-caption-inline">From here you can see Capri floating in the bay like a mirage.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Food</span>
                <h3 class="section-title-panel">Eating More in One Day Than a Week at Sea</h3>
                <p>Life on a ship means measured portions, careful menus. Sorrento means surrender. The first day ashore, I probably ate more than I had in the previous week. Pastries for breakfast. Gelato mid-morning. A long lunch. More gelato. Then dinner.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_5766" class="story-image" data-caption="Restaurant courtyard." alt="Restaurant">
                <p class="photo-caption-inline">A table in a hidden courtyard - stone walls, white tablecloths, surrender.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/20150804_123310" class="story-image" data-caption="Local cuisine." alt="Food">
                <p class="photo-caption-inline">Fresh mozzarella, tomatoes still warm from the sun, local wine.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_5771" class="story-image" data-caption="Street scene." alt="Street">
                <p class="photo-caption-inline">The scent of lemons everywhere - this is limoncello country.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_0880" class="story-image" data-caption="Market scene." alt="Market">
                <p class="photo-caption-inline">The markets overflow - peppers, lemons, tomatoes piled high.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_0894" class="story-image" data-caption="Fruit market." alt="Fruit market">
                <p class="photo-caption-inline">La fragola - strawberries, oranges, the colors of the coast.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_0902" class="story-image" data-caption="Pastry display." alt="Pastries">
                <p class="photo-caption-inline">Pastries for breakfast. And maybe second breakfast.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_0905" class="story-image" data-caption="Gelato." alt="Gelato">
                <p class="photo-caption-inline">Gelato mid-morning. Then again mid-afternoon. It's research.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_0909" class="story-image" data-caption="Food scene." alt="Food">
                <p class="photo-caption-inline">By evening I'd eaten more than the previous week combined.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_0903" class="story-image" data-caption="Italian treats." alt="Treats">
                <p class="photo-caption-inline">No regrets. This is what port days are for.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Streets</span>
                <h3 class="section-title-panel">The Old Town</h3>
                <p>Sorrento's centro storico is a maze of narrow streets where every turn reveals another postcard. Via San Cesareo is the main artery - ceramics, leather, limoncello at every turn.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_5779" class="story-image" data-caption="Old town street." alt="Street">
                <p class="photo-caption-inline">Narrow lanes where scooters somehow squeeze through.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_0881" class="story-image" data-caption="Town architecture." alt="Architecture">
                <p class="photo-caption-inline">Ochre walls, green shutters, the timeless Mediterranean.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_0883" class="story-image" data-caption="Street scene." alt="Street scene">
                <p class="photo-caption-inline">Every corner a postcard, every alley a discovery.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_0886" class="story-image" data-caption="Local life." alt="Local life">
                <p class="photo-caption-inline">Step off the tourist track and find the real Sorrento.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_0899" class="story-image" data-caption="Town detail." alt="Detail">
                <p class="photo-caption-inline">Peppers drying on balconies, old men playing cards.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_0913" class="story-image" data-caption="Walking the streets." alt="Walking">
                <p class="photo-caption-inline">The kind of Italy that existed before the guidebooks arrived.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_0914" class="story-image" data-caption="Sorrento views." alt="Views">
                <p class="photo-caption-inline">Views around every corner.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Piazzas</span>
                <h3 class="section-title-panel">Where Life Happens</h3>
                <p>Piazza Tasso is the heart of Sorrento - where locals and tourists mingle over espresso, where Vespas weave through traffic, where the evening passeggiata begins.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_0917" class="story-image" data-caption="Piazza scene." alt="Piazza">
                <p class="photo-caption-inline">The main piazza - the heartbeat of Sorrento.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_0919" class="story-image" data-caption="Town square." alt="Square">
                <p class="photo-caption-inline">Named for the Renaissance poet Torquato Tasso, born here in 1544.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_0922" class="story-image" data-caption="Local gathering." alt="Gathering">
                <p class="photo-caption-inline">Espresso, conversation, the rhythm of Italian life.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_0923" class="story-image" data-caption="Evening scene." alt="Evening">
                <p class="photo-caption-inline">As evening comes, the passeggiata begins.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_0926" class="story-image" data-caption="Town life." alt="Town life">
                <p class="photo-caption-inline">Sorrento makes you forget you have anywhere else to be.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Coast</span>
                <h3 class="section-title-panel">Exploring the Peninsula</h3>
                <p>Beyond the town, the Sorrentine Peninsula unfolds - lemon groves, ancient villages, views that stop you in your tracks.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_1031" class="story-image" data-caption="Peninsula view." alt="Peninsula">
                <p class="photo-caption-inline">The coast stretches toward Positano.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_1032" class="story-image" data-caption="Coastal scenery." alt="Coast">
                <p class="photo-caption-inline">Cliffs and sea, the eternal Mediterranean.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_1038" class="story-image" data-caption="Views." alt="Views">
                <p class="photo-caption-inline">Every viewpoint more stunning than the last.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_1048" class="story-image" data-caption="Lemon groves." alt="Lemons">
                <p class="photo-caption-inline">Lemon groves terrace the hillsides - this is where limoncello was born.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_1072" class="story-image" data-caption="Scenery." alt="Scenery">
                <p class="photo-caption-inline">The Tyrrhenian Sea impossibly blue below.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_1073" class="story-image" data-caption="Coastal path." alt="Path">
                <p class="photo-caption-inline">Paths wind along the cliffs.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_1078" class="story-image" data-caption="Exploration." alt="Exploration">
                <p class="photo-caption-inline">Writers, artists, composers - they all fell for these views.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_1082" class="story-image" data-caption="Panorama." alt="Panorama">
                <p class="photo-caption-inline">The bay curves away toward Naples and Vesuvius.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_1095" class="story-image" data-caption="Coast view." alt="Coast view">
                <p class="photo-caption-inline">A reminder that this beautiful coast exists on borrowed time.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_1097" class="story-image" data-caption="Sorrento vista." alt="Vista">
                <p class="photo-caption-inline">The town that has drawn travelers for centuries.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_1100" class="story-image" data-caption="Clifftop view." alt="Clifftop">
                <p class="photo-caption-inline">Perched impossibly on the clifftops.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_1106" class="story-image" data-caption="Final coast view." alt="Final view">
                <p class="photo-caption-inline">The Sorrentine Peninsula - Italy at its most beautiful.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_4996" class="story-image" data-caption="2014 return." alt="2014">
                <p class="photo-caption-inline">I came back in 2014 - some places demand a return.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_4998" class="story-image" data-caption="Second visit." alt="Second visit">
                <p class="photo-caption-inline">The same views, the same magic.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_5002" class="story-image" data-caption="Return trip." alt="Return">
                <p class="photo-caption-inline">Sorrento never disappoints.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_5006" class="story-image" data-caption="Final image." alt="Final">
                <p class="photo-caption-inline">Until next time, Sorrento.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Moment</span>
                <h3 class="section-title-panel">The Mill That Called to Me</h3>
                <p>Back in 2012, I was home on leave, still working the South Pacific circuit. I saw a photograph online of an ancient mill, swallowed by a gorge, covered in vegetation. Something about it stuck with me. I thought: I want to move beyond the Pacific. I want to see places like this.</p>
                <p>Then Door 3 opened. I joined the Mediterranean circuit. And one day in Sorrento, I found myself standing at the edge of that gorge, looking down at that exact mill - the Valle dei Mulini, the Valley of the Mills.</p>
                <p>What a moment that was. The image that had called to me for years, finally real beneath my feet.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_1041" class="story-image" data-caption="The Valley of the Mills - the image that called to me before I even knew I'd get there." alt="Valle dei Mulini">
                <p class="photo-caption-inline">The Valle dei Mulini. The photograph that called to me for years - and there I am, finally standing above it.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about Sorrento</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🍋</span>
                        <span>The Clifftop Town</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Valle dei Mulini:</strong> The Valley of the Mills is a deep gorge in the center of Sorrento, where 13th-century flour mills operated until the 1940s. Now abandoned and overgrown, it's one of Italy's most haunting sights.</li>
                        <li><strong>Torquato Tasso:</strong> The Renaissance poet, author of "Jerusalem Delivered," was born in Sorrento in 1544. The main piazza bears his name.</li>
                        <li><strong>Limoncello:</strong> The famous lemon liqueur originated on this coast, made from sfusato amalfitano lemons - a variety found nowhere else.</li>
                        <li><strong>Gateway to Capri:</strong> Ferries depart regularly from Marina Piccola to the legendary island, just 5km offshore.</li>
                        <li><strong>Vesuvius View:</strong> On clear days, the volcano that buried Pompeii is visible smoking on the horizon - a reminder of the coast's precarious beauty.</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('sorrento')}
        `,
        fullDesc: "Sorrento sits on cliffs overlooking the Bay of Naples, with Vesuvius smoking on the horizon.\n\nThe town has drawn travelers for centuries - writers, artists, composers all fell for its lemon-scented air and impossible views. The old town's narrow streets wind past ceramics shops and limoncello vendors. From here you can see Capri floating in the bay, close enough to almost touch.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/sorrento/img_1094"
    },
    {
        id: 125,
        title: "Elba, Italy",
        coords: [42.815, 10.318],
        tag: "Napoleon's Exile",
        icon: "👑",
        isDoor: false,
        tag: "🎵 Original Song",
        useRichContent: true,
        richContent: `
        <div class="song-panel">
            <div class="song-status">
                <span class="status-label">Original Song</span>
                <span class="status-text">Coming Soon</span>
            </div>

            <div class="story-section-panel">
                <h3>Reserved for Music</h3>
                <p>This location has been set aside for an original song. The music is being written as a tribute to this place and the memories it holds.</p>
                <p><strong>Mood:</strong> Exile / Beautiful Prison</p>
                <p><strong>Theme:</strong> Napoleon's island, too beautiful to hold, escape</p>
            </div>

            <div class="lyrics-section" onclick="this.classList.toggle('expanded')">
                <div class="lyrics-header">
                    <span class="lyrics-title">
                        <span class="lyrics-icon">📝</span>
                        <span>Lyrics</span>
                    </span>
                    <span class="lyrics-toggle">▼</span>
                </div>
                <div class="lyrics-content">
                    <div class="lyrics-text">
<span class="verse-label">Coming Soon</span>

Lyrics will appear here when the song is complete.

This space is reserved for "Elba, Italy" -
an original composition inspired by this place.
                    </div>
                </div>
            </div>

            <div class="audio-player-container">
                <p style="text-align: center; font-size: 0.85rem; color: rgba(245,240,232,0.6); margin: 0;">
                    🎵 Audio player will appear when song is released
                </p>
            </div>
        </div>`,
        fullDesc: "Elba is where they sent Napoleon after his first fall.\n\nHe lasted ten months. The Medici fortresses of Portoferraio still crown the hills above the harbor, and pastel buildings tumble down to the waterfront. The island is beautiful enough that exile here hardly seems like punishment. Napoleon apparently agreed - he escaped and marched back to Paris for the Hundred Days.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769804712/IMG_7039_fbjze4.jpg"
    },
    {
        id: 126,
        title: "Bonifacio, Corsica",
        coords: [41.387, 9.159],
        tag: "City on the Cliff",
        icon: "🏰",
        isDoor: false,
        tag: "🎵 Original Song",
        useRichContent: true,
        richContent: `
        <div class="song-panel">
            <div class="song-status">
                <span class="status-label">Original Song</span>
                <span class="status-text">Coming Soon</span>
            </div>

            <div class="story-section-panel">
                <h3>Reserved for Music</h3>
                <p>This location has been set aside for an original song. The music is being written as a tribute to this place and the memories it holds.</p>
                <p><strong>Mood:</strong> Dramatic / Precarious</p>
                <p><strong>Theme:</strong> Cliffs and defiance, hanging over the void</p>
            </div>

            <div class="lyrics-section" onclick="this.classList.toggle('expanded')">
                <div class="lyrics-header">
                    <span class="lyrics-title">
                        <span class="lyrics-icon">📝</span>
                        <span>Lyrics</span>
                    </span>
                    <span class="lyrics-toggle">▼</span>
                </div>
                <div class="lyrics-content">
                    <div class="lyrics-text">
<span class="verse-label">Coming Soon</span>

Lyrics will appear here when the song is complete.

This space is reserved for "Bonifacio, Corsica" -
an original composition inspired by this place.
                    </div>
                </div>
            </div>

            <div class="audio-player-container">
                <p style="text-align: center; font-size: 0.85rem; color: rgba(245,240,232,0.6); margin: 0;">
                    🎵 Audio player will appear when song is released
                </p>
            </div>
        </div>`,
        fullDesc: "Bonifacio clings to limestone cliffs that are slowly crumbling into the sea.\n\nThe old town perches impossibly on the cliff edge, some buildings hanging over nothing but air. The citadel has guarded the strait between Corsica and Sardinia for 800 years. Below, the harbor shelters yachts where Genoese galleys once anchored. The cliffs glow white against the Mediterranean blue.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769805812/20150621_105547_atqiml.jpg"
    },
    {
        id: 127,
        title: "Barbados",
        coords: [13.1939, -59.5432],
        tag: "Little England",
        icon: "🌴",
        isDoor: false,
        tag: "🎵 Original Song",
        useRichContent: true,
        richContent: `
        <div class="song-panel">
            <div class="song-status">
                <span class="status-label">Original Song</span>
                <span class="status-text">Coming Soon</span>
            </div>

            <div class="story-section-panel">
                <h3>Reserved for Music</h3>
                <p>This location has been set aside for an original song. The music is being written as a tribute to this place and the memories it holds.</p>
                <p><strong>Mood:</strong> Joyful / Island Soul</p>
                <p><strong>Theme:</strong> Rum and flying fish, cricket, Caribbean warmth</p>
            </div>

            <div class="lyrics-section" onclick="this.classList.toggle('expanded')">
                <div class="lyrics-header">
                    <span class="lyrics-title">
                        <span class="lyrics-icon">📝</span>
                        <span>Lyrics</span>
                    </span>
                    <span class="lyrics-toggle">▼</span>
                </div>
                <div class="lyrics-content">
                    <div class="lyrics-text">
<span class="verse-label">Coming Soon</span>

Lyrics will appear here when the song is complete.

This space is reserved for "Barbados" -
an original composition inspired by this place.
                    </div>
                </div>
            </div>

            <div class="audio-player-container">
                <p style="text-align: center; font-size: 0.85rem; color: rgba(245,240,232,0.6); margin: 0;">
                    🎵 Audio player will appear when song is released
                </p>
            </div>
        </div>`,
        fullDesc: "Barbados is the Caribbean's easternmost island, where British colonial history meets warm island culture.\n\nThe rum here is legendary - Mount Gay has been distilling since 1703. Cricket is religion. The beaches are postcard-perfect, and Bridgetown's historic center is a UNESCO World Heritage Site. They drive on the left, take afternoon tea seriously, and throw the best crop-over festival in the region.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769808899/20200126_132420_neltyi.jpg"
    },
    {
        id: 128,
        title: "Sanary-sur-Mer, France",
        coords: [43.12, 5.80],
        tag: "Pointu Boats",
        icon: "⛵",
        isDoor: false,
        tag: "🎵 Original Song",
        useRichContent: true,
        richContent: `
        <div class="song-panel">
            <div class="song-status">
                <span class="status-label">Original Song</span>
                <span class="status-text">Coming Soon</span>
            </div>

            <div class="story-section-panel">
                <h3>Reserved for Music</h3>
                <p>This location has been set aside for an original song. The music is being written as a tribute to this place and the memories it holds.</p>
                <p><strong>Mood:</strong> Quiet / Artistic</p>
                <p><strong>Theme:</strong> Artists' refuge, small harbor, Provençal light</p>
            </div>

            <div class="lyrics-section" onclick="this.classList.toggle('expanded')">
                <div class="lyrics-header">
                    <span class="lyrics-title">
                        <span class="lyrics-icon">📝</span>
                        <span>Lyrics</span>
                    </span>
                    <span class="lyrics-toggle">▼</span>
                </div>
                <div class="lyrics-content">
                    <div class="lyrics-text">
<span class="verse-label">Coming Soon</span>

Lyrics will appear here when the song is complete.

This space is reserved for "Sanary-sur-Mer, France" -
an original composition inspired by this place.
                    </div>
                </div>
            </div>

            <div class="audio-player-container">
                <p style="text-align: center; font-size: 0.85rem; color: rgba(245,240,232,0.6); margin: 0;">
                    🎵 Audio player will appear when song is released
                </p>
            </div>
        </div>`,
        fullDesc: "Sanary-sur-Mer is the kind of place that makes you forget the rest of the world exists.\n\nThe harbor is lined with traditional pointu boats, their colorful hulls reflecting in the still water. The church tower of Saint-Nazaire watches over it all. German writers fled here during the Nazi era, and you can understand why. Some places just feel like sanctuary.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_1200,q_80,f_auto/v1769818458/sanary-sur-mer_lhds8c.jpg"
    },
    {
        id: 129,
        title: "Antibes, France",
        coords: [43.25, 7.05],
        tag: "Market Morning",
        icon: "🫒",
        isDoor: false,
        shortDesc: "The best market on the Côte d'Azur.",
        useRichContent: true,
        richContent: `
            <div class="demographics-strip">
                <div class="demo-item">
                    <span class="demo-icon">🫒</span>
                    <span class="demo-value">Provençal Market</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🧀</span>
                    <span class="demo-value">Local Cheese</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">🌿</span>
                    <span class="demo-value">Herbs de Provence</span>
                </div>
                <div class="demo-item">
                    <span class="demo-icon">☀️</span>
                    <span class="demo-value">Côte d'Azur</span>
                </div>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Market</span>
                <h3 class="section-title-panel">Marché Provençal</h3>
                <p>The Marché Provençal in Antibes is legendary - a sensory explosion of olives, cheese, spices, and the colors of Provence. Every morning the covered market fills with vendors and locals who've been shopping here for generations.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/antibes/20150816_103313" class="story-image" data-caption="Olives in every variety at the Antibes market." alt="Olive stall">
                <p class="photo-caption-inline">Olives in every variety - green, black, stuffed, marinated, herbed.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/antibes/20150820_095310" class="story-image" data-caption="French cheese selection." alt="Cheese display">
                <p class="photo-caption-inline">The cheese counter - a geography lesson in French dairy.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/antibes/20150820_094836" class="story-image" data-caption="Market scene." alt="Market">
                <p class="photo-caption-inline">Every stall a work of art, every vendor an expert.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/antibes/20150820_095513" class="story-image" data-caption="Provençal display." alt="Provençal goods">
                <p class="photo-caption-inline">Provence in a single frame - lavender, ceramics, and that famous light.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/antibes/20150820_095643" class="story-image" data-caption="Market treats." alt="Market treats">
                <p class="photo-caption-inline">Treats and treasures at every turn.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/antibes/20150820_103348" class="story-image" data-caption="Market atmosphere." alt="Market scene">
                <p class="photo-caption-inline">The morning light streaming through the market stalls.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/antibes/20150820_105943" class="story-image" data-caption="Local goods." alt="Local goods">
                <p class="photo-caption-inline">This is what the French mean by "terroir" - the taste of a place.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/antibes/antibes_market" class="story-image" data-caption="Spices of Provence." alt="Spice stall">
                <p class="photo-caption-inline">Spices in rainbow rows - saffron, herbes de Provence, piment d'Espelette.</p>
            </div>

            <div class="story-section-panel">
                <span class="section-tag-panel">The Town</span>
                <h3 class="section-title-panel">Beyond the Market</h3>
                <p>Beyond the market, Antibes reveals itself slowly. The old ramparts still stand, the ceramic tile map shows centuries of history, and the watchtower keeps watch over it all.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/antibes/20150820_094258" class="story-image" data-caption="Ceramic map of Antibes." alt="Tile map">
                <p class="photo-caption-inline">A ceramic map of the old town - every street a story.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/antibes/20150816_140928" class="story-image" data-caption="Antibes scene." alt="Town view">
                <p class="photo-caption-inline">The Côte d'Azur light that drew Picasso and countless others.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/antibes/20150818_155645" class="story-image" data-caption="Old town." alt="Old town">
                <p class="photo-caption-inline">Narrow streets where every corner hides a café or gallery.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/antibes/20150820_105951" class="story-image" data-caption="Town detail." alt="Town detail">
                <p class="photo-caption-inline">The kind of place that makes you forget the rest of the world.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/antibes/20150820_120958" class="story-image" data-caption="Town architecture." alt="Architecture">
                <p class="photo-caption-inline">Mediterranean architecture at its finest.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/antibes/antibes_watchtower" class="story-image" data-caption="The watchtower of Antibes." alt="Watchtower">
                <p class="photo-caption-inline">The old watchtower - keeping guard over the Côte d'Azur since the Middle Ages.</p>
                <img src="https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/antibes/20150820_214933" class="story-image" data-caption="Night panorama of the Côte d'Azur from the ship." alt="Night panorama">
                <p class="photo-caption-inline">Sailing away at night - the lights of the Riviera stretching into the darkness.</p>
            </div>

            <div class="more-info-container" onclick="this.classList.toggle('active')">
                <button class="more-info-btn">
                    <span class="info-icon">💡</span>
                    <span>More about Antibes</span>
                </button>
                <div class="more-info-popup">
                    <div class="popup-title">
                        <span class="title-icon">🫒</span>
                        <span>The Provençal Market Town</span>
                    </div>
                    <ul class="fun-facts-list">
                        <li><strong>Marché Provençal:</strong> The covered market has operated daily (except Mondays) since 1895, making it one of the oldest continuous markets on the Riviera.</li>
                        <li><strong>Picasso Museum:</strong> The Château Grimaldi houses works Picasso created during his stay in 1946. He was so inspired by the light that he left 23 paintings and 44 drawings.</li>
                        <li><strong>Roman Origins:</strong> Antibes was founded as Antipolis by Greek colonists from Marseille around 340 BC.</li>
                        <li><strong>Port Vauban:</strong> One of the largest marinas in Europe, where superyachts dock alongside fishing boats.</li>
                        <li><strong>Graham Greene:</strong> The novelist lived in Antibes for his final years, calling it "the only place I've ever wanted to live."</li>
                    </ul>
                </div>
            </div>

            ${generateGallery('antibes')}
        `,
        fullDesc: "The Marché Provençal in Antibes is legendary - a sensory explosion of olives, cheese, spices, and the colors of Provence.\n\nEvery morning the covered market fills with vendors and locals who've been shopping here for generations. Beyond the market, the old town reveals itself slowly - ramparts, narrow streets, and the famous light that drew Picasso.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/shiplife/antibes/antibes_market_2"
    },
    {
        id: 134,
        title: "Port Denarau, Fiji",
        coords: [-17.7765, 177.3800],
        tag: "Marina Paradise",
        icon: "⛵",
        isDoor: false,
        shortDesc: "Fiji's resort marina, where superyachts meet palm trees.",
        useRichContent: true,
        richContent: `
            <p>Port Denarau is Fiji's playground - a marina lined with resorts, restaurants, and the kind of yachts that make you wonder what you did wrong in life.</p>
            <p>The sailing yacht Nirvana was docked here when we visited - a $35 million beauty owned by the founder of Mango. The Fiji flag flew from her mast alongside the Spanish ensign.</p>
            <p>There used to be a Hard Rock Cafe right on the marina. It closed in 2020, but back then it was still going strong, serving up burgers while the tropical sun set over the palm trees.</p>

            ${generateGallery('fiji')}
        `,
        fullDesc: "Port Denarau is Fiji's playground - a marina lined with resorts, restaurants, and superyachts.\n\nThe sailing yacht Nirvana was docked here when we visited - a $35 million beauty. There used to be a Hard Rock Cafe right on the marina.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1770836867/shiplife/figi/oh7lcv26vmsxcftvu9rl.jpg"
    },
    {
        id: 135,
        title: "Isle of Pines, New Caledonia",
        coords: [-22.6167, 167.4833],
        tag: "The Closest to Paradise",
        icon: "🌴",
        isDoor: false,
        shortDesc: "A coral island ringed by impossibly clear water.",
        useRichContent: true,
        richContent: `
            <p>The Isle of Pines is one of those places that makes the travel brochures seem like they undersold it.</p>
            <p>The water is so clear you can see straight to the bottom from the deck. The crew gathered on the beach for the day - some swimming, some lounging, cold drinks in hand. The kind of crew day that made the contract worth it.</p>

            ${generateGallery('isleOfPines')}
        `,
        fullDesc: "The Isle of Pines is one of those places that makes the travel brochures seem like they undersold it.\n\nThe water is so clear you can see straight to the bottom from the deck. The crew gathered on the beach for the day.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/v1770826440/shiplife/isle-of-pines/tpdgnpy4lkvxtivahmf7.jpg"
    },
    {
        id: 136,
        title: "Noumea, New Caledonia",
        coords: [-22.2758, 166.4580],
        tag: "France in the Pacific",
        icon: "🇫🇷",
        isDoor: false,
        shortDesc: "A slice of France beneath the Southern Cross.",
        useRichContent: true,
        richContent: `
            <p>Noumea is what happens when France plants itself in the middle of the South Pacific.</p>
            <p>The baguettes are real. The cafés have that unmistakable French feel. But step outside and you're surrounded by Melanesian culture, markets selling tropical fruit, and children with smiles that light up the beach.</p>

            ${generateGallery('noumea')}
        `,
        fullDesc: "Noumea is what happens when France plants itself in the middle of the South Pacific.\n\nThe baguettes are real. The cafés have that unmistakable French feel. But step outside and you're surrounded by Melanesian culture.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/new-Caldonia/004.JPG"
    },
    {
        id: 137,
        title: "Perth / Fremantle, Australia",
        coords: [-32.0569, 115.7439],
        tag: "Western Outpost",
        icon: "🏖️",
        isDoor: false,
        useRichContent: true,
        shortDesc: "Australia's most isolated city.",
        fullDesc: "Perth is closer to Singapore than Sydney. It's Australia's most isolated major city, separated from the east by thousands of kilometers of desert.\n\nWe docked at Fremantle, the historic port town where old meets new.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/perth/IMG_0136.jpg",
        richContent: `
            <div class="story-section-panel">
                <p>Perth is closer to Singapore than Sydney. It's Australia's most isolated major city, separated from the east by thousands of kilometers of desert.</p>
                <p>We docked at Fremantle, the historic port town where old meets new. The Fremantle Railway Station is a heritage gem.</p>
            </div>

            ${generateGallery('perth')}
        `
    },
    {
        id: 139,
        title: "Christmas Island, Australia",
        coords: [-10.4475, 105.6904],
        tag: "Red Crab Migration",
        icon: "🦀",
        isDoor: false,
        useRichContent: true,
        shortDesc: "Home of the famous red crab migration.",
        fullDesc: "Christmas Island is an Australian territory in the Indian Ocean, famous for its annual red crab migration—when millions of crabs march from the forest to the sea.\n\nThe island is mostly national park, with dramatic cliffs and pristine rainforest.",
        image: "https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/shiplife/christmas-island/IMG_0179.jpg",
        richContent: `
            <div class="story-section-panel">
                <p>Christmas Island is an Australian territory in the Indian Ocean, famous for its annual red crab migration—when millions of crabs march from the forest to the sea.</p>
                <p>The island is mostly national park, with dramatic cliffs and pristine rainforest.</p>
            </div>

            ${generateGallery('christmasIsland')}
        `
    }
];
