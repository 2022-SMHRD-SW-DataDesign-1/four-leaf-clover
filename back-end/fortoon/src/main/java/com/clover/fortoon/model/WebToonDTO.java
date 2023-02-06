package com.clover.fortoon.model;

import lombok.Data;

@Data
public class WebToonDTO {
    int webtoon_num;
    String webtoon_title;
    String webtoon_writer;
    String webtoon_tag;
    String webtoon_synopsis;
    int webtoon_rating_count;
    float webtoon_rating;
    String webtoon_day;
    String webtoon_thumbnail_url;
    String webtoon_url;
}
