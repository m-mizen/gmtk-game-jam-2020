import { Entity } from '../entity';

// Components
import {
  CatMetaComponent,
  HitboxComponent,
  WanderComponent,
  AnimatedSpriteComponent,
  ScaredComponent,
  JailableComponent,
  MeowComponent,
  LateComponent,
  CatWarning,
  RescueComponent
} from '../components';

/**
 * Generates a cat entity
 */
export class CatFactory {
  private catBehavior: any;

  constructor(catBehavior: any) {
    this.catBehavior = catBehavior;
  }

  public create(x: number, y: number): Entity {
    // Generate the meta before anything else;
    const catMeta = new CatMetaComponent();

    const animatedSprite = new AnimatedSpriteComponent(
      `cats/${catMeta.variety}/${catMeta.variety}`
    );

    const catEntity = new Entity()
      .attach(catMeta)
      .attach(new HitboxComponent(x, y, 30, 30))
      .attach(animatedSprite)
      .attach(new WanderComponent(this.catBehavior.wandering))
      .attach(new JailableComponent())
      .attach(new ScaredComponent(
        this.catBehavior.scared.flightDistance,
        this.catBehavior.scared.flightSpeed))
<<<<<<< HEAD
      .attach(new MeowComponent(
        this.catBehavior.meowing.interval,
        this.catBehavior.meowing.chance))
      .attach(new LateComponent())
      .attach(new RescueComponent())
      .attach(new CatWarning());
=======
      .attach(new MeowComponent())
      .attach(new LateComponent());
>>>>>>> f6ec434c1aedd507579b690d35b75efbd6ea819a

    return catEntity;
  }
}
