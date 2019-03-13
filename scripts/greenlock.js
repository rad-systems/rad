'use strict';

// TODO: greenlock not serving pages, currently only working to create the letsencrypt certificates.

require('greenlock-express').create({
  email: process.env.EMAIL     // The email address of the ACME user / hosting provider
  , agreeTos: true                    // You must accept the ToS as the host which handles the certs
  , configDir: '~/.config/acme/'      // Writable directory where certs will be saved
  , communityMember: false             // Join the community to get notified of important updates
  , telemetry: false                   // Contribute telemetry data to the project
   
  // Using your express app:
  // simply export it as-is, then include it here
  , app: require('./server.js')
  , debug: true
}).listen(6800, 6843);
