'use client';
import React, { Component } from 'react';

export default class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    const isChunkError =
      error?.name === 'ChunkLoadError' ||
      error?.message?.includes('chunk') ||
      error?.message?.includes('Failed to load chunk');

    if (typeof window !== 'undefined' && isChunkError) {
      const lastReload = sessionStorage.getItem('last_chunk_reload');
      const now = Date.now();
      if (!lastReload || now - Number(lastReload) > 10000) {
        sessionStorage.setItem('last_chunk_reload', String(now));
        window.location.reload();
      }
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="diag-3d-loading">
            <span className="diag-loading-text">RELOADING 3D VIEW...</span>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
