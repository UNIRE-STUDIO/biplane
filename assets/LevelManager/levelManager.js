import { randomRange, getTimeFormat } from "../general.js";
import Сountdown from "./сountdown.js";
import SaveManager from "../saveManager.js";

export default class LevelManager
{
    constructor(input)
    {
        this.countLevels = 2; // Посчитать автоматически
        
        this.score = 0;
        this.currentLevel;

        this.isPause = false;

        // Присваивает класс Game
        this.gameOverEvent;
        this.saveManager;
    }

    startLevel(level)
    {
        this.currentLevel = level;
        this.score = 0;
        this.isPause = false;
    }

    setPause()
    {
        this.isPause = true;
    }

    setResume()
    {
        this.isPause = false;
    }

    setRestart()
    {
        this.startLevel(this.currentLevel);
    }

    gameOver()
    {
        console.log("game-over");
        
        this.gameOverEvent();
    }
}