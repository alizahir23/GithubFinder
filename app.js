// Inint Github
const github = new GitHub;
const ui = new UI;
// search user from github api

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    // get input text

    const userText = e.target.value;


    if (userText !== '') {
        // make http call

        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // show alert
                    ui.searchAlert(data.profile.message, 'alert alert-danger');
                } else {
                    // add user to UI
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // clear profile
        ui.clearProfile();

    }
});
