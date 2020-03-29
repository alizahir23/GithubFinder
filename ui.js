class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.clearAlertImmediately();
        this.profile.innerHTML = `
            <div class = "card card-body mb-3">
                <div class = "row">
                    <div class = "col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${ user.html_url}" target = "_blank" class = "btn btn-block btn-primary mt-3 mb-3">View Profile</a>
                    </div>
                    <div class = "col-md-9">
                        <span class="badge badge-light" >Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-light" >Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-light" >Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-light" >Public Followers: ${user.followers}</span>
                        <span class="badge badge-light" >Public Following: ${user.following}</span>
                        <br><br>
                        <ul class = "list-group">
                            <li class = "list-group-item">Company: ${user.company}</li>
                            <li class = "list-group-item">Website: ${user.blog}</li>
                            <li class = "list-group-item">Location: ${user.location}</li>
                            <li class = "list-group-item">Member since: ${user.created_at}</li>
                            
                    </div>

                </div>
            </div>
            <h3 class="page-heading md-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }


    clearProfile() {
        this.profile.innerHTML = '';
    }

    searchAlert(message, className) {
        this.clearAlertImmediately();
        this.clearProfile();
        console.log('hell');
        const parentContainer = document.querySelector('.searchContainer');
        const titleText = document.querySelector('.search')
        const divA = document.createElement('div');
        divA.classList = className;

        divA.classList.add('alert-danger');


        divA.innerHTML = `${message} `;
        parentContainer.insertBefore(divA, titleText);

        this.clearAlert();
    }

    clearAlert() {
        setTimeout(() => {
            const currentAlert = document.querySelector('.alert');
            if (currentAlert) {
                currentAlert.remove();
            }
        }, 3000);
    }

    clearAlertImmediately() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearProfile() {
        this.profile.innerHTML = "";
    }

    showRepos(repos) {
        let output = '';

        repos.forEach((repo) => {
            output += `
            <div class="card card-body mb-2">
              <div class="row">
                <div class="col-md-6">
                  <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                </div>
              </div>
            </div>
          `;
        });

        document.getElementById('repos').innerHTML = output;
    }
}