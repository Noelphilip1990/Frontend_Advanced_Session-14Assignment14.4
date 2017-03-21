import { Component } from '@angular/core';
import { CommentService } from './commentService';
import { Router } from '@angular/router';

@Component({
	selector: 'about',
	template: `<h2>Observable Example</h2>
	<div class="container">
	<div class="container-fluid">
	 <div class="row">
	 <div class="col-md-4"><b>ID</b></div><div class="col-md-4"><b>NAME</b></div>
	 </div>
	 
	 	<div class="row">
	 	<div *ngFor="let com of comment">
			<div class="col-md-4">{{com.id}}</div><div class="col-md-4">{{com.name}}</div><div class="col-md-4"><button class="btn btn-primary" (click)="edit">EDIT</button><button class="btn btn-primary"  (click)="add()">ADD</button></div>
	 	</div>
	 </div>
	 <div class="row">
	 <div class="col-sm-12">
		<router-outlet></router-outlet>
	</div>
	 </div>
	 </div>
	 </div>
	`,
	providers: [CommentService]
})
export class AboutComponent {
	comment: Comment[] = [];
	public data: any[] = [];
	users = [
		{ id: 1, name: "Noel" },
		{ id: 2, name: "Javed" },
		{ id: 3, name: "Salim" },
		{ id: 4, name: "Jose" },
		{ id: 5, name: "Rose" },
	];
	add()
	{
		this.router.navigate(['about/add']);
	}
	constructor(private cs: CommentService, private router: Router) {
		this.loadComments();
		console.log("LSIT:" + this.comment.length);
	}
	 loadComments() {
		 // Get all comments
		 this.cs.getComments()
			 .subscribe(
			 comment => this.comment = comment, //Bind to view

			 err => {
				 // Log errors if any
				 console.log(err);
			 });
		}	 

	

	}



