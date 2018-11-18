//
//  HttpJsonResponse.h
//  learnBestTools
//
//  Created by 杨剑 on 2018/8/24.
//  Copyright © 2018年 Facebook. All rights reserved.
//
#import "HTTPResponse.h"

@interface HttpDictResponse : NSObject <HTTPResponse> {
  NSInteger _status;
}

- (id)initHttpCode:(int)httpCode;

@end
