<?php

// Exit if accessed directly
if (!defined("ABSPATH")) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if (!function_exists("chld_thm_cfg_locale_css")) :
  function chld_thm_cfg_locale_css($uri) {
    if (empty($uri) && is_rtl() && file_exists(get_template_directory() . "/rtl.css"))
      $uri = get_template_directory_uri() . "/rtl.css";
    return $uri;
  }
  add_filter("locale_stylesheet_uri", "chld_thm_cfg_locale_css");
endif;

if (!function_exists("child_theme_configurator_css")) :
  function child_theme_configurator_css() {
    wp_enqueue_style("chld_thm_cfg_child", trailingslashit(get_stylesheet_directory_uri()) . "style.css", array("astra-theme-css", "astra-menu-animation", "woocommerce-layout", "woocommerce-smallscreen", "woocommerce-general"));
    wp_enqueue_style("chld_thm_cfg_child_custom", trailingslashit(get_stylesheet_directory_uri()) . "style.css");
  }
  add_action("wp_enqueue_scripts", "child_theme_configurator_css", 10);
endif;

// TODO: Integrate Koala
// TO RUN style.css
add_action("wp_enqueue_scripts", "my_theme_enqueue_styles");
function my_theme_enqueue_styles() {
  wp_enqueue_style("parent-style", get_template_directory_uri() . "/style.css");
}

// Add script.js
function my_custom_scripts() {
  wp_enqueue_script("custom-js", get_stylesheet_directory_uri() . "/script.js", array("jquery"), "", true);
}
add_action("wp_enqueue_scripts", "my_custom_scripts");


// // https://www.cloudways.com/blog/how-to-create-custom-post-types-in-wordpress/
// /* Custom Post type start */
// function cw_post_type_instructor() {
//   register_post_type("instructors", [
//     "supports" => [
//       "title", // post title
//       "editor", // post content
//       "author", // post author
//       "thumbnail", // featured images
//       "excerpt", // post excerpt
//       "custom-fields", // custom fields
//       "comments", // post comments
//       "revisions", // post revisions
//       "post-formats", // post formats
//     ],
//     "labels" => [
//       "name" => _x("Instructors", "plural"),
//       "singular_name" => _x("Instructor", "singular"),
//       "menu_name" => _x("Instructors", "admin menu"),
//       "name_admin_bar" => _x("Instructors", "admin bar"),
//       "add_new" => _x("Add New Instructor", "add new"),
//       "add_new_item" => __("Add New Instructor"),
//       "new_item" => __("New Instructor"),
//       "edit_item" => __("Edit Instructor"),
//       "view_item" => __("View Instructor"),
//       "all_items" => __("All Instructors"),
//       "search_items" => __("Search Instructors"),
//       "not_found" => __("No Instructors Found."),
//     ],
//     "public" => true,
//     "query_var" => true,
//     "rewrite" => array("slug" => "all-instructors"),
//     "has_archive" => true,
//     "hierarchical" => false,
//     "menu_icon" => "dashicons-buddicons-buddypress-logo",
//   ]);
// }
// add_action("init", "cw_post_type_instructor");

function cw_post_type_event() {
  register_post_type("events", [
    "supports" => [
      "title", // post title
      "editor", // post content
      "author", // post author
      "thumbnail", // featured images
      "excerpt", // post excerpt
      "custom-fields", // custom fields
      "comments", // post comments
      "revisions", // post revisions
      "post-formats", // post formats
    ],
    "labels" => [
      "name" => _x("Events", "plural"),
      "singular_name" => _x("Event", "singular"),
      "menu_name" => _x("Events", "admin menu"),
      "name_admin_bar" => _x("Events", "admin bar"),
      "add_new" => _x("Add New Event", "add new"),
      "add_new_item" => __("Add New Event"),
      "new_item" => __("New Event"),
      "edit_item" => __("Edit Event"),
      "view_item" => __("View Event"),
      "all_items" => __("All Events"),
      "search_items" => __("Search Events"),
      "not_found" => __("No Events Found."),
    ],
    "public" => true,
    "query_var" => true,
    "rewrite" => [
      "slug" => "all-events",
    ],
    "has_archive" => true,
    "hierarchical" => false,
    "menu_icon" => "dashicons-calendar-alt",
  ]);
}
add_action("init", "cw_post_type_event", 0);


// Search filter
function searchfilter($query) {
  if ($query->is_search && !is_admin()) {
    $query->set(
      "post_type",
      [
        "post",
        "events"
      ]
    );
    // $query->set("post_type", get_post_types([], "names"));
  }

  return $query;
}
add_filter("pre_get_posts", "searchfilter");



// TODO: Remove this whenever releasing and doing final push.
// define("WP_DEBUG", true);

// var_dump(get_post_types());
// $post_types = get_post_types("", "names");
// var_dump($post_types);



// require __DIR__ . '/shortcodes.php';
// Decided to just leave it as 1 page, easier for me to update.
/**
 * Here goes a list of shortcodes that can be used in this child theme.
 */

function featured_event_list($atts = [], $content = null, $tag = "") { // TODO: Rename
  $args = [
    'post_type' => 'events',
    'posts_per_page' => $atts["posts_per_page"] ?? -1,
  ];
  $query = new WP_Query($args);

  // TODO: Proper handling.
  if (!$query->have_posts()) return "No events...";

  $eventSection = "";
  $featuredEventList = "";
  $isMain = $atts["is_main"] ?? false;

  while ($query->have_posts()) :
    $query->the_post();
    $eventThumbnailId = get_post_gallery_images()[0] ?? 0;
    $eventThumbnail = wp_get_attachment_image_src($eventThumbnailId)[0] ?? "https://www.555beatboxsg.com/wp-content/uploads/2022/01/coming-soon.jpg"; // TODO: Better null handling
    $product_thumbnail_alt = get_post_meta($eventThumbnailId, '_wp_attachment_image_alt', true) ?? "555 Beatbox Initiative | Event Image";

    $featuredEventList .=
      '<div class="swiper-slide event-item">' . // A

      '<picture class="event-img-div">' .
      '<img src="' . $eventThumbnail . '" alt="' . $product_thumbnail_alt . '" class="swiper-lazy"/>' .
      '</picture>' .

      '<div class="event-content">' . // B

      '<h1 class="event-title">' . get_the_title() . '</h1>' .

      '<div class="event-description">' . // C

      '<p class="posted-detail">' . get_the_excerpt() . '</p>' .
      // ' - Posted ' . human_time_diff(get_the_time('U'), current_time('timestamp')) . ' ago' .
      // '<a target="_blank" href="' . get_permalink() . '" class="cta">VIEW</a>' .

      '</div>' . // C

      '</div>' . // B

      '<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>' .

      '</div>'; // A

  endwhile;

  wp_reset_postdata();

  $eventSection .=
    '<div class="swiper event-swiper"><div class="swiper-wrapper">' .
    $featuredEventList .
    '</div>' .
    // '<div class="swiper-button-prev swiper-button"></div>' .
    // '<div class="swiper-button-next swiper-button"></div>' .
    '</div>';

  if ($isMain) $eventSection =
    "<div class='home-page-event-section'>
      <h1 class='home-page-event-title'>EVENTS</h1>
      $eventSection
    </div>";

  return html_entity_decode($eventSection);
}

/**
 * Registers all shortcodes.
 *
 * @return null
 */
function register_shortcodes() {
  add_shortcode("featured_event_list", "featured_event_list");
}

add_action('init', 'register_shortcodes');
