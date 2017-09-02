import { Component, OnInit } from '@angular/core';
import { IMovie } from './movie';
import { MovieService } from './movie.service';
// import { UploadService } from '../services/upload.service';
import { Upload } from '../models/upload.model';
import * as _ from 'lodash'; // to help loop over files more succinctly

@Component({
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
    pageTitle: string = 'Requirement List';
    listFilter: string = '';
    showImage: boolean = false;
    movies: IMovie[];
    errorMessage: string;

    files: FileList;
    upload: Upload;
    // uploadService: UploadService;


    constructor(private movieService: MovieService) { }

    ngOnInit() { this.getMovies(); }

    getMovies() {
        this.movieService.getMovies()
            .subscribe(
                (movies: IMovie[]) => this.movies = movies,
                (error: any) => this.errorMessage = <any>error);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

        handleFiles(event) {
        this.files = event.target.files;
    }

    uploadFiles() {
        const filesToUpload = this.files;
        // console.log (_.range (filesToUpload.length));
        const filesIdx = _.range(filesToUpload.length);
        _.each(filesIdx, (idx) => {
        // console.log(filesToUpload[idx]);
        this.upload = new Upload(filesToUpload[idx]);
        // this.uploadService.uploadFile(this.upload);
        });
    }

    

}
