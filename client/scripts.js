var $chirpButton = $('#chirp-btn');
var $chirpField = $('#chirp-field');
var $chirpList = $('#chirp-list');
// var $userSelector = $('#user-selector');

$chirpField.on('input', function() {
var isEmpty = $chirpField.val().length === 0;
$chirpButton.prop('disabled', isEmpty);
});

$chirpButton.click(postChirp);

function postChirp() {
var chirp = {
message: $chirpField.val(),
userid: 2, //$userSelector.val(),
// username: 'DeDe'
};

$.ajax({
        method: 'POST',
        url: '/api/chirps',
        contentType: 'application/json',
        data: JSON.stringify(chirp)
    }).then(function(success) {
        $chirpField.val('');
        $chirpButton.prop('disabled', true);
        getChirps();
    }, function(err) {
        console.log(err);
    });
}

function addChirpDiv(chirp) {
var $chirpDiv = $("<div class='chirp'></div>");
var $message = $('<p></p>');
var $username = $('<h4></h4>');
var $timestamp = $('<h5></h5>');
var $delbutton = $('<button class="delete-button fancy-button red">Delete</button>');
// $delButton.click(function() {
// deleteChirp(chirps[0].id);
// });
$message.text(chirp.message);
// $name.text(chirp.username);
$timestamp.text(new Date(chirp.timestamp).tolocalstring());

$message.appendTo($chirpDiv)
$name.appendTo($chirpDiv)
$timestamp.appendTo($chirpDiv)
$delButton.appendTo($chirpDiv)

$chirpDiv.appendto($chirpList)
}

function getChirps(){
    $.ajax({
        method: 'GET',
        url: '/api/chirps'
    }).then(function(chirps) {
        $chirpList.empty();
        for (var i = 0; i < chirps.length; i++) {
            var $chirpDiv = $('<div class="chirp"></div>');
            var $message = $('<h5></h5>');
            var $username = $('<h4></h4>');
            var $timestamp = $('<p></p>');
            
            $message.text(chirps[i].message);
            // $username.text(chirps[i].username);
            $timestamp.text(new Date(chirps[i].timestamp).toLocaleString());

            $message.appendTo($chirpDiv);
            // $username.appendTo($chirpDiv);
            $timestamp.appendTo($chirpDiv);

            $chirpDiv.appendTo($chirpList);
        }
    }, function(err) {
        console.log(err);
    });
}
getChirps();



function deleteChirp(id) {
    $.ajax({
        method: 'DELETE',
        url: '/api/chirps/' + id
    }).then(function() {
        getChirps();
    }, function(err) {
        console.log(err);
    });
}



// function populateUsers() {
//     $.ajax({
//         method: 'GET',
//         url: '/api/users'
//     }).then(function(users) {
//         for (var i = 0; i < users.length; i++) {
//             var $userOption = $('<option value="' + user[i].id + '">' + user[i].name + '</option>');
//             $userSelector.append($userOption);
//         }
//     }, function(err) {
//         console.log(err);
//     });
// }
// populateUsers(); //call populate user function