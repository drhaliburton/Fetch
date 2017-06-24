

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}


// createResourceCard

function createResourceCard(resource) {
  var title = resource.title;
  var description = resource.description;
  var imageURL = resource.url;

  return `<div class="col-md-4">
            <div class="card">
            <h1>${escape(title)}</h1>
            <img src="${escape(imageURL)}">
            <p>${escape(description)}</p>
            <div class="comment">Comment</div><fieldset class="rating">
              <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
              <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
              <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
              <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
              <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label><br><br>
             </fieldset>
            <div id="comments-container"></div>
          </div></div>`;

};


function createUserResourceCard(resource) {
  var title = resource.title;
  var description = resource.description;
  var imageURL = resource.url;

  return `<div class="col-md-4">
            <div class="card">
            <h1>${escape(title)}<span class="edit-button">V</span></h1>
            <img src="${escape(imageURL)}">
            <p>${escape(description)}</p>
            <div class="comment">Comment</div><fieldset class="rating">
              <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
              <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
              <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
              <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
              <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label><br><br>
             </fieldset>
             <div id="comments-container"></div>
          </div></div>`;

};

// renderResources

function renderResources(resources) {
  var $resources = $('.row');
  $resources.empty();
  for(var i = 0; i < resources.length; i++) {
    var $card = createResourceCard(resources[i]);
    $resources.prepend($card);
  }
};


function renderUserResources(resources) {
  var $resources = $('.row');
  $resources.empty();
  for(var i = 0; i < resources.length; i++) {
    var $card = createUserResourceCard(resources[i]);
    $resources.prepend($card);
  }
};


//  renderProfile data

function renderProfileData(user) {
  var first = user.first_name;
  var last = user.last_name;
  var email = user.email;
  var image = user.profile_photo;

  return `<div class="user-info">
            <h1>${escape(first) + " " + escape(last)}</h1><br>
            <img src="${escape(image)}">
            <h3>${escape(email)}</h3>
          </div>`;

};

function renderProfile(data) {
  console.log(data);
  var $profile = $('.user-info');
  $profile.empty();
    var $card = renderProfileData(data[0]);
    $profile.prepend($card);
};

// getURLMetaData

// addNewResource



// editResource

// addRating

// addComment


// showUserResources


// filterResultsByCategory

// filterResultsBySearchTerm
