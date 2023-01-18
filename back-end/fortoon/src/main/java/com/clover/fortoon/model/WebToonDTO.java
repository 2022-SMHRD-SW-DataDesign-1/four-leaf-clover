package com.clover.fortoon.model;

import lombok.Data;

@Data
public class WebToonDTO {
    int webtoon_num;
    String webtoon_title;
    String webtoon_writer;
    String webtoon_tag;
    String webtoon_synopsis;
    int webtoon_like;
    int webtoon_comment;
    float webtoon_rating;
}
