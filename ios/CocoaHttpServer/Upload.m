//
//  Upload.m
//  learnBestTools
//
//  Created by 杨剑 on 2018/8/22.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "Upload.h"
#import <React/RCTLog.h>
#import <ifaddrs.h>
#import <arpa/inet.h>
#import "HTTPServer.h"
#import "DDLog.h"
#import "DDTTYLogger.h"
#import "MyHTTPConnection.h"

@interface Upload ()
@property (nonatomic, strong) HTTPServer * httpServer;
@end

@implementation Upload

RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(startLocalServer:(RCTResponseSenderBlock)callback)
{
  _httpServer = [[HTTPServer alloc] init];
  [_httpServer setPort:7887];
  [_httpServer setType:@"_http._tcp."];
  // webPath是server搜寻HTML等文件的路径
  NSString * webPath = [[[NSBundle mainBundle] resourcePath] stringByAppendingPathComponent:@"web"];
  [_httpServer setDocumentRoot:webPath];
  [_httpServer setConnectionClass:[MyHTTPConnection class]];
  NSError *err;
  if ([_httpServer start:&err]) {
    NSLog(@"port %hu",[_httpServer listeningPort]);
  }else{
    NSLog(@"%@",err);
  }
  //TODO
  NSString *ipStr = [self getIpAddresses];
  NSLog(@"ip地址 %@", ipStr);
  NSArray *info = [NSArray arrayWithObjects:ipStr, @"7887", @"服务开启成功", nil];
//  NSDictionary *info = [NSDictionary dictionaryWithObjectsAndKeys:ipStr,@"7887",@"服务开启成功", nil];
  
  callback(@[[NSNull null], info]);
}

- (NSString *)getIpAddresses{
  NSString *address = @"error";
  struct ifaddrs *interfaces = NULL;
  struct ifaddrs *temp_addr = NULL;
  int success = 0;
  // retrieve the current interfaces - returns 0 on success
  success = getifaddrs(&interfaces);
  if (success == 0)
  {
    // Loop through linked list of interfaces
    temp_addr = interfaces;
    while(temp_addr != NULL)
    {
      if(temp_addr->ifa_addr->sa_family == AF_INET)
      {
        // Check if interface is en0 which is the wifi connection on the iPhone
        if([[NSString stringWithUTF8String:temp_addr->ifa_name] isEqualToString:@"en0"])
        {
          // Get NSString from C String
          address = [NSString stringWithUTF8String:inet_ntoa(((struct sockaddr_in *)temp_addr->ifa_addr)->sin_addr)];
        }
      }
      temp_addr = temp_addr->ifa_next;
    }
  }
  // Free memory
  freeifaddrs(interfaces);
  return address;
}

@end
