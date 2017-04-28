/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.6.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1LabelSelector'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1LabelSelector'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1beta1PodDisruptionBudgetSpec = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1LabelSelector);
  }
}(this, function(ApiClient, V1LabelSelector) {
  'use strict';




  /**
   * The V1beta1PodDisruptionBudgetSpec model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1beta1PodDisruptionBudgetSpec
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1beta1PodDisruptionBudgetSpec</code>.
   * PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1beta1PodDisruptionBudgetSpec
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>V1beta1PodDisruptionBudgetSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1PodDisruptionBudgetSpec} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1PodDisruptionBudgetSpec} The populated <code>V1beta1PodDisruptionBudgetSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('minAvailable')) {
        obj['minAvailable'] = ApiClient.convertToType(data['minAvailable'], 'String');
      }
      if (data.hasOwnProperty('selector')) {
        obj['selector'] = V1LabelSelector.constructFromObject(data['selector']);
      }
    }
    return obj;
  }

  /**
   * An eviction is allowed if at least \"minAvailable\" pods selected by \"selector\" will still be available after the eviction, i.e. even in the absence of the evicted pod.  So for example you can prevent all voluntary evictions by specifying \"100%\".
   * @member {String} minAvailable
   */
  exports.prototype['minAvailable'] = undefined;
  /**
   * Label query over pods whose evictions are managed by the disruption budget.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1LabelSelector} selector
   */
  exports.prototype['selector'] = undefined;



  return exports;
}));

