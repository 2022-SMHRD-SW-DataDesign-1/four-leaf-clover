package com.clover.fortoon.model;

import lombok.Data;

@Data
public class SynopsisDTO {
    int webtoon_num;
    String webtoon_title;
    String webtoon_writer;
    String webtoon_tag;
    String webtoon_synopsis;
    String webtoon_day;
    String webtoon_big_thumbnail_url;
}
