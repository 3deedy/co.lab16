var $chirpButton = $('#chirp-btn');
var $chirpField = $('#chirp-field');
var $chirpList = $('#chirp-list');
var $chirpSelector = $('#user-selector');

$chirpField.on('input', function() {
var isEmpty = $chirpField.val().length === 0;
$chirpButton.prop('disabled', isEmpty);
]);

$chirpButton.click(postChirp);

function postChirp() {
var chirp = {
message: $chirpField.val(),
userid: $userSelector.val()
};

$.ajax({
method: 'POST',
url: '/api/chirps'
contentType: 'application/json',
data: JSON.stringify(chirp)
});
.then(function(success) {
$chirpfield.val('');
$chirpButton.prop('disabled', true);
getChirps();
},
function(err) {
console.log(err);
});
}

function getChirps() {
$.ajax({
method: 'GET',
url: '/api/chirps',
})
.then function(chirps) {
chirpList.empty();
for (var i = 0; i < chirps.length; i++) {
addChirpDiv(chirps[i]);
}
},
function(err) {
console.log(err);
});
}
getChirps();//call get chirps



function deleteChirp(id) {
$.ajax({
method: 'DELETE',
url: '/api/chirps' + id
})
.then(function() {
getchirps();
}), function(err) {
console.log(err);
});
}

function addChirpDiv(chirp) {
var $chirpDiv = $("<div class='chirp'></div>");
var $message = $('<p></p>');
var $user = $('<h4></h4>');
var $timestamp = $('<h5></h5>');
var $delbutton = $('<button class="delete-button fancy-button red">Delete</button>');
$delButton.click(function() {
deletechirp(chirp.id);
});

$message.text(chirp.message);
$user.text(chirp.username);
$timestamp.text(new Date(chirp.timestamp).tolocalstring());

$message.appendTo($chirpDiv)
$user.appendTo($chirpDiv)
$timestamp.appendTo($chirpDiv)
$delButton.appendTo($chirpDiv)

$chirpDiv.appendto($chirpList)
}

function populateUsers() {
.ajax({
method: 'GET',
urL: '/api/users'
}
.then(function(users) {
for (var i=0; i < users.length; i++)
var $userOption = $(‘<option value=“‘ + users[i].id + '“>' + users[i].name + "</option>");
$userSelector.append($userOption);

function(err) {
console.log(err);
}

populateUser(); //call populate user function