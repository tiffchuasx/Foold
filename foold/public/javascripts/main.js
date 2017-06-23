// All the stuff that doesn't require a backend
// const slider = new Slider ('.ex10', {});
  //
  $(document).ready(function() {

  function showCreateForm() {
    $('#editform').modal('show');
    $('#editform').addClass('createForm');
    $('.modal-title').text('Create Review!');
    $('button.submit').text('Create');
  }
  function hideCreateForm() {
    $('#editform').modal('hidden');
  }


    $('#review-button').on('click', function(event){
      console.log('click');
      showCreateForm();
    })

    $('#submitReviewBut').on('click', function(event){
      console.log('click');
      hideCreateForm();
    })

    /* Create review */
    // function createReview(review){
    //
    //   // Setup template - change this
    //
    //   // Append the row
    //   $('#cart > div').append(tpl);
    // }

    // Create review on server
    function createReview(){

    var review = {};
    review.review_name = $('.editform #review_name').val();
    review.amount_spent = $('.editform #amount_spent').val();
    review.party_size = $('.editform #party_size').val();
    review.rating = $('.editform #rating').val();
    review.comments = $('.editform #comments').val();
    var restaurantID = $('#restaurantID').val();

    //   $.ajax({
    //     method: 'POST',
    //     url: '/review/'+restaurantID,
    //     data: review
    //   }).done(function(review) {
    //     console.log('success adding review')
    //     // createReview(review);
    //     // $('[data-id=' + review.id + ']').hide();
    //     // $('#editform').modal('hide');
    //     // $('[data-id=' + review.id + ']').fadeIn();
    //   });
    // }

}
  });
