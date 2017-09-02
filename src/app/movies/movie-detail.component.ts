import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IMovie } from './movie';
import { MovieService } from './movie.service';

// import { ImageService } from '../services/image.service';
// import { Compliance } from '../models/compliance.model';
// import { Observable } from 'rxjs/Observable';





@Component({
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

    // images: Observable<Compliance[]>;
    pageTitle: string = 'Requirement Detail';
    movie: IMovie;
    errorMessage: string;

    constructor(private movieService: MovieService,
                private router: Router,
                // imageService: ImageService,
                private route: ActivatedRoute) {
    }


    //  ngOnInit() {
    //     this.images = this.imageService.getImages();
    // }

    // ngOnChanges() {
    //     this.images = this.imageService.getImages();
    // }



    ngOnInit(): void {
        this.route.params.subscribe(
            params => {
                const id = +params['id'];
                this.getMovie(id);
            }
            
        );
        // ), 

        // this.images = this.imageService.getImages();

    }

    

    getMovie(id: number) {
        this.movieService.getMovie(id)
            .subscribe(
                (movie: IMovie) => this.movie = movie,
                (error: any) => this.errorMessage = <any>error);
    }

    onBack() {
        this.router.navigate(['/movies']);
    }

    //  ngOnInit() {
    //     this.images = this.imageService.getImages();
    // }

    // ngOnChanges() {
    //     this.images = this.imageService.getImages();
    // }






}
