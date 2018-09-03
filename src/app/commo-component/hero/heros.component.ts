import { Component, OnInit } from "@angular/core";
import { HeroIntf } from "../../interface";
import { HeroService } from "../../service/hero.service";

@Component({
  selector: "app-heros",
  templateUrl: "./heros.component.html",
  styleUrls: ["./heros.component.css"]
})
export class HerosComponent implements OnInit{
  // 英雄list
  heroes: HeroIntf[];

  /**
   * 构造器
   * @param heroService 英雄服务service
   */
  constructor(private heroService: HeroService) {}

  /**
   * 画面启动event
   */
  ngOnInit() {
    // 画面data初期化
    this.doInit();
  }

  /**
   * 画面data初期化
   */
  private doInit() {
    // 获取英雄列表
    this.getHero();
  }

  /**
   * 获取英雄信息
   */
  private getHero() {
    // 获取英雄信息
    this.heroService.getHeroList().subscribe(heroList => this.heroes = heroList);
  }
}
