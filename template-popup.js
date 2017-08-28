export function template_pop_up(data){
  const pop_up = '<div class="pop-up">'
                  + '<div class="bg-white">'
                      +'<p class="uk-article-title">'+data.name+'</p>'
                      + '<p class="p-small">'+data.lat+'</p>'
                      + '<p class="p-small">'+data.lng+'</p>'
                  +'</div>'
                  +'<a href="#" class="bg-red"> Voir cette maison </a>'
                +'</div>';
  return pop_up;
}
