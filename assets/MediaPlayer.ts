class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;

    constructor(config){
        const { element } = config;
        this.media = element;
        this.plugins = config.plugins || [];
        this.InitPlugins();
    }

    private InitPlugins(){
        this.plugins.forEach(plugin => {
            plugin.run(this)
        });
    }

    play(){
        this.media.play();
    }

    stop(){
        this.media.pause();
    }

    togglePlay(){
        if (this.media.paused === false) {
            this.media.pause();
        } else if (this.media.paused === true) {
            this.media.play();
        }

    }

    mute(){
        this.media.muted = true;
    }

    unMute(){
        this.media.muted = false;
    }

    toggleMute(){
        if(this.media.muted === false) {
            this.media.muted = true;
        } else if (this.media.muted === true) {
            this.media.muted = false;
        }
    }
}

export default MediaPlayer;