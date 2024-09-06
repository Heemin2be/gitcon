package org.comstudy.myapp_memo.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

// @Setter
// @Getter
// @AllArgsConstructor
// @NoArgsConstructor
// @ToString      이거 일일이 안쳐도 
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode  //equals와 hash코드 재정의
@Builder 

public class Memo {
  private int id;
  private String title;
  private String content;
}