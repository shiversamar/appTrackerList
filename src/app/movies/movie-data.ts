import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IMovie } from './movie';

export class MovieData implements InMemoryDbService {

    createDb() {
        const movies: IMovie[] = [
            {
                'id': 1,
                'director': 'Certification',
                'description': 'Hell of seitan lyft pug polaroid fingerstache listicle scenester actually taxidermy godard. Tilde messenger bag gochujang, listicle occupy narwhal austin air plant. Four loko literally austin cred waistcoat vexillologist small batch, synth trust fund woke. Knausgaard lomo squid enamel pin cloud bread. Fingerstache man bun hexagon four loko blue bottle air plant vinyl green juice fanny pack.',
                'imageurl': 'http://saphanatutorial.com/wp-content/uploads/2014/12/certification.jpg',
                'mpaa': 'pg-13',
                'releaseDate': '2001-12-19T00:00:00',
                'title': 'MDLaguna Corporation',
                'price': 'L5591DFGG',
                'starRating': 4.88,
                'approvalRating': 0.97
            },
            {
                'id': 2,
                'director': 'PEZA Registration',
                'description': "Taiyaki chicharrones celiac leggings, mixtape godard selfies cred coloring book vinyl. 8-bit XOXO gastropub raclette, squid woke distillery you probably haven't heard of them hammock. Direct trade PBR&B taxidermy, freegan umami stumptown sustainable. Bespoke scenester typewriter, neutra ugh fixie cardigan 3 wolf moon leggings occupy VHS. Paleo roof party gastropub locavore PBR&B.",
                'imageurl': 'http://daemec.com/wp-content/uploads/2016/10/7-1.png',
                'mpaa': 'pg-13',
                'releaseDate': '2002-12-18T00:00:00',
                'title': 'Laguna Electronics',
                'price': 'F5591DFGG',
                'starRating': 4.2,
                'approvalRating': 0.94
            },
            {
                'id': 3,
                'director': 'Letter of Authority',
                'description': "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
                'imageurl': 'https://www.leanmethods.com/sites/leanmethods.com/files/certification.jpg',
                'mpaa': 'pg-13',
                'releaseDate': '2003-12-17T00:00:00',
                'title': 'Source Intelligence',
                'price': 'C5591DFGG',
                'starRating': 4.5,
                'approvalRating': 0.9895
            },
            {
                'id': 4,
                'director': 'Building Permit',
                'description': "Thundercats cliche meggings ugh pitchfork organic chicharrones. Scenester +1 succulents ethical forage. Keytar flexitarian helvetica vinyl craft beer flannel pitchfork williamsburg pok pok disrupt semiotics +1 lyft copper mug direct trade. Post-ironic flannel church-key brunch snackwave. Green juice you probably haven't heard of them marfa before they sold out. Lyft waistcoat gentrify kitsch. YOLO tacos pour-over street art occupy, activated charcoal succulents everyday carry single-origin coffee. Chartreuse tote bag roof party shabby chic.. ",
                'imageurl': 'http://www.lenel.com/assets/images/training/lenel-certification-program/professional-cert-700x422.png',
                'mpaa': 'nr',
                'releaseDate': '1971-02-02T00:00:00',
                'title': 'Notch8',
                'price': 'D5591DFGG',
                'starRating': 4.9,
                'approvalRating': 0.9295
            },
            {
                'id': 5,
                'director': 'Material Data Sheet',
                'description': 'Messenger bag trust fund fixie listicle, crucifix shoreditch brunch aesthetic cardigan bushwick irony vaporware helvetica lyft kickstarter. Post-ironic hoodie narwhal 3 wolf moon, cornhole raw denim pickled cronut. Cold-pressed man braid selfies, put a bird on it chillwave listicle occupy. Blog VHS before they sold out, offal gentrify pour-over activated charcoal salvia shabby chic.',
                'imageurl': 'http://www.yourwholehouse.com/NIBI%20Cert.jpg',
                'mpaa': 'pg-13',
                'releaseDate': '2015-07-24T00:00:00',
                'title': 'Valley View Hotel and Casino',
                'price': '5591DFGG',
                'starRating': 2.7,
                'approvalRating': 0.17
            }
        ];
        return { movies };
    }
}
