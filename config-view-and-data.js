/////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Philippe Leefsma 2015 - ADN/Developer Technical Services
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////
var BASE_URL = 'https://developer.api.autodesk.com';
var VERSION = 'v2';

module.exports = {

  // File resumable upload chunk in MB
  fileResumableChunk: 40,

  // Default bucketKey, used for testing
  // needs to be unique so you better modify it
  defaultBucketKey: 'adn-bucket',

  // Replace with your own API credentials:
  // http://developer.autodesk.com
  credentials: {

    ConsumerKey: process.env.LMV_CONSUMERKEY,
    ConsumerSecret: process.env.LMV_CONSUMERSECRET
  },

  // API EndPoints
  endPoints:{

    authenticate:     BASE_URL + '/authentication/v1/authenticate',
    getBucket:        BASE_URL + '/oss/' + VERSION + '/buckets/%s/details',
    createBucket:     BASE_URL + '/oss/' + VERSION + '/buckets',
    listBuckets:      BASE_URL + '/oss/' + VERSION + '/buckets?%s',
    upload:           BASE_URL + '/oss/' + VERSION + '/buckets/%s/objects/%s',
    resumableUpload:  BASE_URL + '/oss/' + VERSION + '/buckets/%s/objects/%s/resumable',

    // the new endpoints after Forge Dev Con in June 2016
    mdFormats:       BASE_URL + '/modelderivative/' + VERSION + '/designdata/formats',
    mdThumbnail:     BASE_URL + '/modelderivative/' + VERSION + '/designdata/%s/thumbnail', // %s: urn
    mdProperties:    BASE_URL + '/modelderivative/' + VERSION + '/designdata/%s/metadata/%s/properties', // first %s is urn, second is guid
    mdMetaData:      BASE_URL + '/modelderivative/' + VERSION + '/designdata/%s/metadata', // %s: urn
    mdManifest:      BASE_URL + '/modelderivative/' + VERSION + '/designdata/%s/manifest', // design urn
    mdHierarchy:     BASE_URL + '/modelderivative/' + VERSION + '/designdata/%s/metadata/%s', // first %s is urn, second is guid
    mdDerivative:    BASE_URL + '/modelderivative/' + VERSION + '/designdata/%s/manifest/%s', // first %s is urn, second is derivative urn
    mdManifest:      BASE_URL + '/modelderivative/' + VERSION + '/designdata/%s/manifest', // %s: urn
    mdpostJob:       BASE_URL + '/modelderivative/' + VERSION + '/designdata/job', // %s: urn

    // the following will be deprecated after Forge Dev Con in June 2016
    supported:        BASE_URL + '/derivativeservice/' + VERSION + '/supported',
    register:         BASE_URL + '/derivativeservice/' + VERSION + '/registration',
    unregister:       BASE_URL + '/derivativeservice/' + VERSION + '/registration/%s',
    thumbnail:        BASE_URL + '/derivativeservice/' + VERSION + '/thumbnails/%s',
    manifest:         BASE_URL + '/derivativeservice/' + VERSION + '/manifest/%s',
    derivatives:      BASE_URL + '/derivativeservice/' + VERSION + '/derivatives/%s',
    viewers:          BASE_URL + '/viewingservice/'    + VERSION + '/viewers'
  }
}
