class GitHub {

    constructor() {
        this.clientId = '4026a548d491783731f2';
        this.clientSecret = 'c58eec973e03fa06fe5265da092a3b3e652846fd';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        console.clear();

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        console.log(profile, repos);
        return {
            profile,
            repos
        }

    }


}