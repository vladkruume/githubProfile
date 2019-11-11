class GitHub{
    constructor(){
        this.client_id="785a1c2b8b622452d2e7";
        this.client_secret="e47e592e95a72d66121dd95ae1e3c17b6cbd8df8";
        this.repos_count=5;
        this.repos_count="created: asc";
        this.user="vladkruume";
    }
    async getUserData(){
        let urlProfile = 'https://api.github.com/${this.user}?client_id=${this.client_id}&client_secret=${this.client_secret}';
        let urlRepos = 'https://api.github/${this.user}/repos?per_page=${this.repos_count}&sort${this.repos_sort}&client_id=${this.client_id}&client_secret=$';
        const profileRespomse = await fetch(urlProfile);
        const profileRespomse = await fetch(urlRepos)



    }
}