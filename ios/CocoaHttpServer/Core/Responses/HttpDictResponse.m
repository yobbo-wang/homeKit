//
//  HttpDictResponse.m
//  learnBestTools
//
//  Created by 杨剑 on 2018/8/24.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "HttpDictResponse.h"

@implementation HttpDictResponse

//返回JSON数据
-(id)initHttpCode:(int)httpCode
{
  if ((self = [super init]))
  {
    _status = httpCode;
  }
  
  return self;
}

- (UInt64) offset {
  return 0;
}

- (void)setOffset:(UInt64)offset {
  ;
}

- (NSDictionary *)httpHeaders
{
  NSDictionary* headers = @{@"Content-Type": @"application/json; charset=utf-8"};
  return headers;
}

- (BOOL) isDone {
  return YES;
}

- (NSInteger)status
{
  return _status;
}

- (UInt64)contentLength {
  return 0;
}

- (NSDictionary *)readDataOfLength:(NSUInteger)length {
  return nil;
}


@end
