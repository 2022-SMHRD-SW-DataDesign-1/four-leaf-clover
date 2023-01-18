package com.clover.fortoon.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WebToonDTO {
    int wt_num;
    String wt_title;
    String wt_writer;
    String wt_tag;
    String wt_synopsis;
    int wt_like;
    int wt_comment;
    int wt_rating;
}
