import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
$('#circleDrop').click(function(){
  $('.card-middle').slideToggle();
});

$('#circleDrop2').click(function(){
  $('.card-middle2').slideToggle();
});

$('#circleDrop3').click(function(){
  $('.card-middle3').slideToggle();
});

  }
}
