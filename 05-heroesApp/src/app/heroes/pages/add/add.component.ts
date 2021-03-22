import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class AddComponent implements OnInit {
  public publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  hero: Hero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('editar')) {
      return;
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
      .subscribe((hero) => (this.hero = hero));
  }

  showSnackbar(message: string): void {
    this.snackBar.open(message, 'OK!', {
      duration: 2500,
    });
  }

  save(): void {
    if (this.hero.superhero.trim().length === 0) {
      return;
    }

    if (this.hero.id) {
      // Actualizar
      this.heroesService
        .updateHero(this.hero)
        .subscribe((hero) => this.showSnackbar('Registro actualizado'));
    } else {
      // Crear
      this.heroesService.addNewHero(this.hero).subscribe((hero) => {
        this.router.navigate(['/heroes/editar', hero.id]);
        this.showSnackbar('Registro creado');
      });
    }
  }

  deleteHero(): void {
    this.dialog.open(ConfirmComponent, {
      width: '250px',
    });

    this.heroesService
      .deleteHero(this.hero.id!)
      .subscribe((resp) => this.router.navigate(['/heroes']));
  }
}
